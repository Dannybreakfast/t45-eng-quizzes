#!/usr/bin/env python3
"""Fetch current KNQI d-TPP plates, render PNGs, update knqi/plates-manifest.json.
Run from repo root. Questions are NOT changed; plates whose PDF hash differs from the
reviewed baseline get "changed": true so the quiz can be reviewed."""
import hashlib, json, os, subprocess, sys, tempfile, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone
sys.path.insert(0, os.path.dirname(__file__))
from plates import PLATES_SRC
ROOT = os.getcwd(); OUT = os.path.join(ROOT, "knqi"); IMG = os.path.join(OUT, "img")
MAN = os.path.join(OUT, "plates-manifest.json")
UA = {"User-Agent": "t45-quiz-plate-updater"}
def get(url, accept=None):
    h = dict(UA, **({"Accept": accept} if accept else {}))
    return urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=120).read()

def airac_cycle(today=None):
    from datetime import date, timedelta
    ref = date(2026, 1, 22)  # cycle 2601 effective date; cycles every 28 days
    d = today or datetime.now(timezone.utc).date()
    k = (d - ref).days // 28
    eff = ref + timedelta(days=28 * k)
    n = (eff - date(eff.year, 1, 1)).days // 28 + 1
    return f"{eff.year % 100:02d}{n:02d}"

def current_cycle():
    try:
        return _api_cycle()
    except Exception as e:
        print("API failed, computing AIRAC:", e); return airac_cycle()

def _api_cycle():
    info = json.loads(get("https://external-api.faa.gov/apra/dtpp/info?edition=current", "application/json"))
    d = info["edition"][0]["editionDate"]  # MM/DD/YYYY
    yy = d[-2:]; n = int(info["edition"][0]["editionNumber"])
    return f"{yy}{n:02d}"

def main():
    cyc = os.environ.get("DTPP_CYCLE") or current_cycle()
    meta = ET.fromstring(get(f"https://aeronav.faa.gov/d-tpp/{cyc}/xml_data/d-tpp_Metafile.xml"))
    eff, exp = meta.get("from_edate"), meta.get("to_edate")
    apt = next(a for a in meta.iter("airport_name") if a.get("apt_ident") == "NQI")
    listed = sorted(r.findtext("pdf_name") for r in apt.findall("record"))
    names = {r.findtext("pdf_name"): r.findtext("chart_name") for r in apt.findall("record")}
    uact = {r.findtext("pdf_name"): (r.findtext("useraction") or "").strip() for r in apt.findall("record")}
    old = json.load(open(MAN)) if os.path.exists(MAN) else {"plates": {}}
    os.makedirs(IMG, exist_ok=True)
    tmp = tempfile.mkdtemp(); plates = {}
    known = {f for _, fs, _, _ in PLATES_SRC for f in fs}
    for pid, files, search, crop in PLATES_SRC:
        hashes, imgs, missing = [], [], False
        for i, f in enumerate(files):
            if f not in listed: missing = True; continue
            pdf = os.path.join(tmp, f); open(pdf, "wb").write(get(f"https://aeronav.faa.gov/d-tpp/{cyc}/{f}"))
            page = 1
            if search:  # multi-airport page: find the NQI page
                n = int(subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout.split("Pages:")[1].split()[0])
                for p in range(1, n + 1):
                    t = subprocess.run(["pdftotext", "-f", str(p), "-l", str(p), pdf, "-"], capture_output=True, text=True).stdout
                    if "KNQI" in t and search in t: page = p; break
                txt = subprocess.run(["pdftotext", "-layout", "-f", str(page), "-l", str(page), pdf, "-"], capture_output=True, text=True).stdout
                blk = txt.split("KNQI", 1)[1][:3000] if "KNQI" in txt else ""
                import re
                blk = re.sub(r"\d{2} [A-Z]{3} \d{4} to \d{2} [A-Z]{3} \d{4}", "", blk)
                blk = " ".join(blk.split())
                h = "txt:" + hashlib.sha256(blk.encode()).hexdigest()  # NQI text block, cycle dates removed
            else:
                h = None
            stem = pid if len(files) == 1 else f"{pid}-{i+1}"
            out = os.path.join(IMG, stem)
            subprocess.run(["pdftoppm", "-r", "200", "-png", "-singlefile", "-f", str(page), "-l", str(page), pdf, out], check=True)
            if crop:
                from PIL import Image
                im = Image.open(out + ".png"); W, H = im.size
                if crop == "takeoff": im.crop((0, 0, W, int(H * 0.23))).save(out + ".png")
                else: im.crop((0, int(H * 0.11), W, int(H * 0.83))).save(out + ".png")
            if h is None:  # hash chart pixels, excluding side margins that carry the cycle date stamp
                from PIL import Image
                im = Image.open(out + ".png").convert("L"); W, H = im.size
                h = "px:" + hashlib.sha256(im.crop((int(W * .07), 0, int(W * .93), H)).tobytes()).hexdigest()
            hashes.append(h)
            imgs.append(f"img/{stem}.png")
        prev = old["plates"].get(pid, {})
        base = prev.get("baseline_sha256") or hashes
        if "--accept" in sys.argv: base = hashes  # questions reviewed against this chart
        plates[pid] = {"files": files, "images": imgs, "sha256": hashes, "baseline_sha256": base,
                       "changed": hashes != base, "baseline_cycle": (cyc if base == hashes and (not prev or "--accept" in sys.argv or prev.get("baseline_sha256") is None) else prev.get("baseline_cycle", cyc)), "missing": missing,
                       "chart_names": [names.get(f, "") for f in files], "faa_useraction": [uact.get(f, "") for f in files]}
    new_charts = [f"{f} ({names[f]})" for f in listed if f not in known]
    man = {"airport": "KNQI", "faa_id": "NQI", "cycle": cyc, "effective": eff, "expires": exp,
           "plates": plates, "unquizzed_new_charts": new_charts,
           "checked_utc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ")}
    # keep checked_utc out of the "did anything change" decision
    cmp = lambda m: {k: v for k, v in m.items() if k != "checked_utc"}
    if cmp(old) != cmp(man) or not os.path.exists(MAN):
        json.dump(man, open(MAN, "w"), indent=1); print("manifest updated", cyc)
    else: print("no change", cyc)
if __name__ == "__main__": main()

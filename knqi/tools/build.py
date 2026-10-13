#!/usr/bin/env python3
"""Build the hand-built KNQI section into the publish repo. Not touched by _generate_quizzes.py."""
import html, json, os, shutil, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from questions import PLATES
PUB = sys.argv[1] if len(sys.argv) > 1 else "/workspace/t45-eng-quizzes-publish"
K = os.path.join(PUB, "knqi")
man = json.load(open(os.path.join(K, "plates-manifest.json")))
ORDER = [("Departures", ["sid", "takeoff"]), ("Precision / ILS", ["izlz13r", "ixlx13r", "hiwlw13r", "hiyly13r"]),
         ("TACAN", ["htz13r", "htz35r", "t13lr", "t17l", "t31lr", "ty17r", "ty35r", "tz17r"]),
         ("Radar & airport", ["radar", "ad"])]
E = html.escape
CSS = """
:root{--bg:#0f1419;--panel:#1a2332;--panel2:#243044;--text:#e7eef7;--muted:#9bb0c7;--accent:#3d9cf0;--border:#2e3d52;--ok:#2ecc71;--bad:#e74c3c;--warn:#f39c12}
*{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;background:var(--bg);color:var(--text);line-height:1.45}
a{color:var(--accent)}.crumb{color:var(--muted);font-size:.9rem}.crumb a{text-decoration:none}
#knqi-currency{background:var(--panel);border:1px solid var(--border);border-radius:10px;padding:.6rem .8rem;margin:.6rem 0;font-size:.88rem}
.badge{display:inline-block;padding:.12rem .5rem;border-radius:999px;font-weight:800;font-size:.78rem;margin:.15rem .2rem 0 0}
.badge.ok{background:var(--ok);color:#03140a}.badge.bad{background:var(--bad);color:#fff}.badge.warn{background:var(--warn);color:#1b1100}
.okt{color:var(--ok)}.badt{color:var(--warn)}.small{font-size:.8rem;color:var(--muted);margin-top:.3rem}
#knqi-refresh{background:var(--accent);color:#041018;border:0;border-radius:8px;padding:.4rem .8rem;font-weight:700;cursor:pointer;margin-top:.4rem}
.chk{margin-top:.2rem}
"""
QCSS = CSS + """
.layout{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:1rem;max-width:1500px;margin:0 auto;padding:.8rem}
.plate{position:sticky;top:0;height:100vh;padding:.4rem 0;display:flex;flex-direction:column}
.pbar{display:flex;gap:.4rem;align-items:center;flex-wrap:wrap;margin-bottom:.35rem}
.pbar button{background:var(--panel2);color:var(--text);border:1px solid var(--border);border-radius:7px;padding:.3rem .6rem;cursor:pointer;font:inherit;font-size:.85rem}
.pbar button.on{border-color:var(--accent);color:var(--accent)}
.pview{flex:1;overflow:auto;background:#fff;border-radius:8px;border:1px solid var(--border);touch-action:pan-x pan-y pinch-zoom}
.pview img{display:block;width:100%;height:auto;cursor:zoom-in}
.quiz{padding:.4rem 0 3rem}
h1{font-size:1.3rem;margin:.2rem 0}
.q{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:1rem}
.qtxt{font-weight:650;font-size:1.05rem;margin-bottom:.7rem}
.opt{display:block;width:100%;text-align:left;background:var(--panel2);color:var(--text);border:1px solid var(--border);border-radius:9px;padding:.65rem .8rem;margin:.4rem 0;font:inherit;cursor:pointer}
.opt:hover{border-color:var(--accent)}.opt.right{border-color:var(--ok);background:#173b28}.opt.wrong{border-color:var(--bad);background:#3d1c1c}
.exp{margin-top:.7rem;padding:.7rem;border-left:3px solid var(--accent);background:#152033;border-radius:6px;font-size:.93rem}
.nav{display:flex;gap:.5rem;margin-top:.8rem}.nav button{background:var(--accent);color:#041018;border:0;border-radius:999px;padding:.55rem 1.1rem;font-weight:700;cursor:pointer}
.nav button.ghost{background:transparent;color:var(--accent);border:1px solid var(--border)}
.stat{color:var(--muted);font-size:.88rem;margin:.4rem 0}
.prog{height:6px;background:var(--panel2);border-radius:9px;overflow:hidden;margin:.3rem 0 .6rem}.prog>div{height:100%;background:var(--accent);width:0}
#fs{position:fixed;inset:0;background:#000d;z-index:999;display:none;flex-direction:column}
#fs .bar{display:flex;gap:.5rem;padding:.5rem;justify-content:flex-end}
#fs .bar button{background:var(--panel2);color:#fff;border:1px solid var(--border);border-radius:7px;padding:.45rem .8rem;font:inherit}
#fs .area{flex:1;overflow:auto;touch-action:pan-x pan-y pinch-zoom;background:#fff}
#fs img{display:block;width:100%;max-width:none}
@media (max-width:900px){.layout{grid-template-columns:1fr;padding:.4rem}.plate{height:auto;z-index:5;background:var(--bg);top:0}
 .pview{height:42vh;flex:none}}
"""
def head(title, depth):
    up = "../" * depth
    return (f"<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'/>"
            f"<meta name='viewport' content='width=device-width, initial-scale=1'/>"
            f"<title>{E(title)} — KNQI</title><script src='{up}auth.js'></script>")

JS = r"""
var QS=__QS__, imgs=__IMGS__;
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
var queue,done,first,attempts,cur,answered;
function start(){queue=shuffle(QS.map(function(_,i){return i;}));done=0;first=0;attempts=0;next();}
function next(){answered=false;
 if(!queue.length){finish();return;}
 cur=queue.shift();var q=QS[cur];var opts=shuffle([q[1]].concat(q[2]));
 var h="<div class='qtxt'>"+q[0]+"</div>";
 opts.forEach(function(o){h+="<button class='opt' data-c='"+(o===q[1]?1:0)+"'>"+o+"</button>";});
 h+="<div id='exp'></div>";
 document.getElementById('q').innerHTML=h;
 document.querySelectorAll('.opt').forEach(function(b){b.onclick=function(){pick(b);};});
 upd();}
function pick(b){if(answered)return;answered=true;attempts++;var q=QS[cur],ok=b.dataset.c==='1';
 document.querySelectorAll('.opt').forEach(function(x){if(x.dataset.c==='1')x.classList.add('right');});
 if(!ok){b.classList.add('wrong');queue.push(cur);} else {done++; if(!seen[cur])first++;}
 seen[cur]=1;
 document.getElementById('exp').innerHTML="<div class='exp'><b>"+(ok?"Correct.":"Not quite — this one comes back later.")+"</b> Answer: <b>"+q[1]+"</b><br>"+q[3]+"</div><div class='nav'><button onclick='next()'>Next →</button></div>";
 upd();}
var seen={};
function upd(){document.getElementById('stat').textContent="Mastered "+done+" / "+QS.length+" · first-try correct "+first+" · remaining in queue "+(queue.length+(answered?0:1));
 document.getElementById('bar').style.width=(100*done/QS.length)+"%";}
function finish(){document.getElementById('q').innerHTML="<div class='qtxt'>Done — all "+QS.length+" mastered.</div><p>First-try score: "+first+" / "+QS.length+" ("+Math.round(100*first/QS.length)+"%). Total attempts "+attempts+".</p><div class='nav'><button onclick='seen={};start()'>Retry</button><a href='../section-knqi.html' style='align-self:center'>← KNQI plates</a></div>";upd();}
// plate viewer
var pi=0,z=1;
function showImg(i){pi=i;document.getElementById('pimg').src=imgs[i];document.querySelectorAll('.pg').forEach(function(b,k){b.classList.toggle('on',k===i);});}
function zoom(f){z=Math.max(1,Math.min(5,z*f));document.getElementById('pimg').style.width=(100*z)+"%";}
function fs(){var o=document.getElementById('fs');document.getElementById('fsimg').src=imgs[pi];o.style.display='flex';fz=1;document.getElementById('fsimg').style.width='100%';}
var fz=1;function fzoom(f){fz=Math.max(1,Math.min(6,fz*f));document.getElementById('fsimg').style.width=(100*fz)+'%';}
function fsclose(){document.getElementById('fs').style.display='none';}
document.addEventListener('keydown',function(e){if(e.key==='Escape')fsclose();});
showImg(0);start();
"""
def quiz_page(pid):
    p = PLATES[pid]; mp = man["plates"][pid]; imgs = mp["images"]
    qs = [[E(a), E(b), [E(x) for x in c], E(d)] for a, b, c, d in p["qs"]]
    pg = "".join(f"<button class='pg' onclick='showImg({i})'>Page {i+1}</button>" for i in range(len(imgs))) if len(imgs) > 1 else ""
    body = f"""<style>{QCSS}</style><script src='knqi.js' data-base=''></script></head><body>
<div class='layout'>
<div class='plate'>
 <div class='pbar'>{pg}<button onclick='zoom(1.25)'>＋</button><button onclick='zoom(0.8)'>－</button><button onclick='fs()'>⛶ Fullscreen</button><span class='stat' style='margin:0'>Tap plate to enlarge · pinch to zoom</span></div>
 <div class='pview'><img id='pimg' alt='{E(p["title"])} plate' onclick='fs()'/></div>
</div>
<div class='quiz'>
 <div class='crumb'><a href='../index.html'>Home</a> · <a href='../section-knqi.html'>KNQI</a> · {E(p['title'])}</div>
 <h1>{E(p['title'])}</h1>
 <div class='stat'>NAS Kingsville (KNQI) · {E(p.get('amdt') or '')} · {len(qs)} questions · missed questions re-queue until answered correctly</div>
 <div id='knqi-currency' data-plate='{pid}'>Loading plate currency…</div>
 <div class='prog'><div id='bar'></div></div><div class='stat' id='stat'></div>
 <div class='q' id='q'></div>
 <p class='small'>Training aid only — always brief from the current FAA d-TPP/FLIP plate. Not for navigation.</p>
 <div class='crumb'><a href='../section-knqi.html'>← KNQI plates</a> · <a href='brief-guide.html'>How to brief a plate</a></div>
</div></div>
<div id='fs'><div class='bar'><button onclick='fzoom(1.3)'>＋</button><button onclick='fzoom(0.77)'>－</button><button onclick='fsclose()'>✕ Close</button></div><div class='area'><img id='fsimg' alt='plate fullscreen'/></div></div>
<script>{JS.replace('__QS__', json.dumps(qs, ensure_ascii=False)).replace('__IMGS__', json.dumps(imgs))}</script></body></html>"""
    open(os.path.join(K, f"{pid}.html"), "w").write(head(p["title"], 1) + body)

SCSS = CSS + """.wrap{max-width:1000px;margin:0 auto;padding:1.5rem 1rem 3rem}
header{background:linear-gradient(135deg,#1a2a40,#152033);border:1px solid var(--border);border-radius:12px;padding:1.3rem;margin-bottom:1rem}
h1{margin:.2rem 0}h2{font-size:1.1rem;color:#c5daf0;border-bottom:1px solid var(--border);padding-bottom:.3rem;margin-top:1.6rem}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:.8rem}
.card{background:var(--panel);border:1px solid var(--border);border-radius:12px;overflow:hidden;text-decoration:none;color:var(--text);display:flex;flex-direction:column}
.card:hover{border-color:var(--accent)}.card img{width:100%;height:190px;object-fit:cover;object-position:top;background:#fff}
.card .t{padding:.55rem .7rem;font-weight:650;font-size:.92rem}.card .c{padding:0 .7rem .6rem;color:var(--muted);font-size:.8rem}
a.study-guide-banner{display:block;margin:0 0 1rem;background:linear-gradient(135deg,#1e3a5f,#1a2a40);border:1px solid var(--accent);border-radius:14px;padding:1rem 1.2rem;color:var(--text);text-decoration:none}
.sg-title{font-size:1.2rem;font-weight:800;color:#d8ebff;display:block}.sg-sub{color:var(--muted);font-size:.9rem}
"""
def section():
    total = sum(len(p["qs"]) for p in PLATES.values())
    out = [head("KNQI Departures & Approaches", 0), f"<style>{SCSS}</style><script src='knqi/knqi.js' data-base='knqi/'></script></head><body><div class='wrap'>",
           "<header><div class='crumb'><a href='index.html'>Home</a> · KNQI</div><h1>KNQI — Departures &amp; Approaches</h1>",
           f"<div class='sub' style='color:var(--muted)'>NAS Kingsville (FAA ID NQI) terminal procedures from the FAA d-TPP · {len(PLATES)} plate quizzes · {total} questions · plate stays pinned beside the questions</div></header>",
           "<div id='knqi-currency'>Loading plate currency…</div>",
           "<a class='study-guide-banner' href='knqi/brief-guide.html'><span class='sg-title'>How to brief an approach plate</span><span class='sg-sub'>Top-down briefing order, category selection for the T-45, mins, missed approach, departures & lost comms</span></a>"]
    for sec, ids in ORDER:
        out.append(f"<h2>{E(sec)}</h2><div class='grid'>")
        for pid in ids:
            p = PLATES[pid]; img = "knqi/" + man["plates"][pid]["images"][0]
            out.append(f"<a class='card' href='knqi/{pid}.html'><img loading='lazy' src='{img}' alt=''/><span class='t'>{E(p['title'])}</span><span class='c'>{len(p['qs'])} Q · {E(p.get('amdt') or '')}</span></a>")
        out.append("</div>")
    out.append("<p class='small' style='margin-top:2rem'>Source: FAA Digital-Terminal Procedures Publication (aeronav.faa.gov). Training aid only — not for navigation. Plates auto-checked daily by GitHub Actions; questions are written against the cycle noted on each plate page.</p>")
    out.append("<footer><a href='index.html'>← Home</a></footer></div></body></html>")
    open(os.path.join(PUB, "section-knqi.html"), "w").write("".join(out))

GUIDE = """
<h2>1. Before you open the plate</h2><ul>
<li><b>Currency</b>: check the d-TPP cycle dates on the plate margin (effective/expiration) and the amendment number/date bottom-left. Check NOTAMs.</li>
<li><b>Weather</b>: ATIS (KNQI 282.25) — runway in use, ceiling/visibility, altimeter, winds. Decide which approach is likely and whether you can legally start it (OPNAV 3710.7 weather/alternate rules for your instrument rating).</li>
<li><b>Category</b>: approach category = 1.3 Vso / Vref at max landing weight (AIM 5-4-7): A &lt;91, B 91–120, <b>C 121–140</b>, D 141–165, E &gt;165 KIAS. A T-45C on-speed (~17 units AOA) final is roughly 120–135 KIAS, so brief <b>Cat C</b>. If you'll fly faster (e.g. circling at higher speed), use the higher category — never a lower one. HI- plates only publish C/D/E.</li></ul>
<h2>2. Top-down briefing order (the "strip, plan, profile, mins" flow)</h2><ol>
<li><b>Title & airport</b>: procedure name (e.g. "ILS Z RWY 13R" — the letter distinguishes procedures to the same runway), airport, date/amendment.</li>
<li><b>Briefing strip</b>: primary NAVAID frequency/channel and ident (LOC 110.9 I-NQI Chan 46; TACAN NQI Chan 125; NOG Chan 63 on TACAN Y 17R!), final approach course, runway length, TDZE, airport elevation.</li>
<li><b>Notes</b>: "TACAN required", ALS-inop vis increases, cautions (short intermediate segments), the T (nonstandard takeoff mins/obstacle notes) symbol.</li>
<li><b>Missed approach</b> (briefed early so it's in your head): the first action verbatim — e.g. "Climb to 500, then climbing right turn to 3000, NQI R-184 to BRAMA and hold."</li>
<li><b>Comms</b>: ATIS, approach, tower, ground, clearance; ASR/PAR availability.</li>
<li><b>Plan view</b>: MSA (emergency only, 1000 ft clearance within 25 NM), ESA, IAF(s) and feeders, holding/hold-in-lieu of PT (altitudes, max speed), arcs and lead radials, IF, FAF, terrain/obstacles.</li>
<li><b>Profile</b>: altitudes at each fix (underlined = minimum, overbar = maximum), glideslope intercept (lightning bolt = precision FAF) vs Maltese cross (non-precision FAF), stepdowns, VDP (V), descent angle/TCH, distances, MAP.</li>
<li><b>Minimums</b>: your category's DA or MDA, visibility, HAT/HAA. HAT = DA/MDA − TDZE; HAA = circling MDA − airport elevation. Note any ✱ footnotes.</li>
<li><b>Airport sketch</b>: runway layout, lighting (ALSF-1 on 35R; HIRL/REIL all; TDZL/CL 17L), elevation, then taxi plan.</li></ol>
<h2>3. Flying it — rules to remember</h2><ul>
<li><b>Procedure turn / HILPT</b>: not flown when vectored to final, on a NoPT route, or cleared straight-in (FAR 91.175(j), AIM 5-4-9).</li>
<li><b>Below DA/MDA</b>: only when continuously in position to land with normal maneuvers, flight visibility ≥ published, and required visual references in sight (FAR 91.175(c)). Otherwise go missed at DA / at the MAP.</li>
<li><b>VDP</b>: don't leave MDA before the VDP unless a normal descent is possible (AIM 5-4-5).</li>
<li><b>Circling</b>: reversed-C = expanded circling protected area (Cat C ≈ 2.7 NM at ≤1000 MSL). KNQI radar circling only from PAR W/O GS and ASR; circling to 31L NA at night.</li>
<li><b>Missed approach from a circle</b>: initial climbing turn toward the landing runway, then the published missed (AIM 5-4-21).</li></ul>
<h2>4. Departures</h2><ul>
<li>Brief the KINGSVILLE FOUR: runway heading (130/175/310/355), the NQI 7 DME arc direction, the transition radial (CRP R-038 cross JERIR ≥8000; HOBOZ R-339; JUBAK R-125 / RICTO R-225 are local SUA-entry only), DEP CON 121.05/266.8.</li>
<li>No climb gradient is published on the SID; check the takeoff minimums page for obstacle notes (KNQI lists close-in obstacles only). Standard is 200 ft/NM.</li>
<li><b>Lost comms</b>: per the SID — if no transmissions one minute after departure, climb to assigned altitude, proceed via the 7 DME arc / departure radial to the fix and transition; climb to filed altitude once established on the departure radial (FAR 91.185 logic).</li></ul>
<p class='small'>Training aid; verify against NATOPS, CNATRA instrument FTI and the current plate.</p>"""
def guide():
    open(os.path.join(K, "brief-guide.html"), "w").write(head("How to brief an approach plate", 1) +
        f"<style>{SCSS} li{{margin:.35rem 0}}</style><script src='knqi.js' data-base=''></script></head><body><div class='wrap'><header><div class='crumb'><a href='../index.html'>Home</a> · <a href='../section-knqi.html'>KNQI</a> · Brief guide</div><h1>How to brief an approach plate</h1></header><div id='knqi-currency'></div>{GUIDE}<footer><a href='../section-knqi.html'>← KNQI plates</a></footer></div></body></html>")

shutil.copy(os.path.join(os.path.dirname(os.path.abspath(__file__)), "knqi.js"), os.path.join(K, "knqi.js"))
for pid in PLATES: quiz_page(pid)
section(); guide()
print("built", len(PLATES), sum(len(p["qs"]) for p in PLATES.values()))

# NAV Study Guide — Intermediate Navigation (T-45 / CNATRA)

A consolidated study guide covering **NAV Gouge**, **NAV0102** (INAV & Voice Procedures), **NAV0103** (Departure & Terminal Procedures — expanded 83 cards), and **NAV0104** (Approach Plates). Written for exam prep and cockpit review — prose plus key numbers, not a flashcard dump.

**Sources:** Gouge PDF excerpts + Quizlet · NAV0102 / NAV0103 tsharp slides · NAV0104 Project ThreeSixty (Approach Plates).

---

## Quick reference — numbers worth memorizing

| Topic | Number / Rule |
|-------|----------------|
| Lost-comms squawk | **7600** (all wx); Guard **243.0 / 121.5** |
| Emergency squawk | **7700**; MAYDAY = distress, PAN-PAN = urgency |
| IMC lost-comms route | **AVEF** — Assigned → Vectored → Expected → Filed |
| IMC lost-comms altitude | Highest of **AME** — Assigned / Minimum IFR / Expected |
| FAR 91 below 10,000 MSL | **250 KIAS** max |
| Class B | **250 KIAS**; under B / VFR corridor = **200 KIAS** |
| Class C/D core | **200 KIAS** within **4 nm**, SFC–**2500 AGL** |
| Holding (T-45 SOP) | Max endurance → **200 KIAS** |
| Navy / USAF holding max | **230** / **310** KIAS (unless depicted) |
| Civilian holding | 200 (≤6k) / 230 (to 14k) / 265 (>14k) |
| CNAF fuel reserve | Greater of **10%** planned or **20 min** max endurance @ **10,000 MSL** |
| T-45 IFR reserve | **Always 500 lb** (TW-1/TW-2 SOP) |
| Std card takeoff (NPA / PA) | Not less than **300-1** / **200-1/2** |
| Formation takeoff / 2-ship approach | Circling mins, or **1000-3** |
| Visual approach | **1000-3**; field or traffic in sight; **no MAP** |
| Contact approach | Pilot-only; **1 SM** vis; **is** an IAP with MAP |
| Single-pilot absolute | **200 HAT / ½ SM (2400 RVR)**; T-45 = higher of published or 200-½ |
| Diverse climb / turn | **200 ft/nm**; runway hdg to **400 ft AFE** |
| OIS slope | **40:1** |
| High NAVAID range | **130 NM**; (L) VOR ≈ **18,000 AGL / 40 NM** |
| MSA / ESA | MSA ~**25 NM**; ESA **100 NM** (1000 flat / **2000** mountainous) |
| LOC range | **18 NM** within 10°; **10 NM** within 35° of CL |
| VOR MON floor | ≥ **5000 AGL** CONUS; MON airport rarely >**100 NM** |
| FSS freqs | **122.2 / 255.4** |
| RVSM level-off report | **FL290–FL410** |
| Descent gradient example | ~**637 fpm** for **3°** at **120 kt** GS |

---

## 1. ATC facilities (NAV0102)

Know who does what — exam questions often swap Ground vs Clearance Delivery vs ARTCC.

### Ground Control
- Taxi to/from the duty runway.
- Can **obtain/relay IFR clearances** if Clearance Delivery is unavailable.
- Provides weather information.

### Clearance Delivery
- **No control function** — solely delivers IFR clearances.
- Do not confuse with Ground or Tower.

### Tower
- Controls runway traffic and airborne traffic in the control area.
- Issues takeoff and landing clearances.
- Airport advisories to arrivals if ATIS is absent.

### Departure Control
- Separates departures; sequences IFR and participating VFR.
- Radar service, including VFR assistance.

### ARTCC (Center)
- **Central authority for issuing IFR clearances.**
- Route assignments, traffic separation, NOTAMs, weather as required.

### Approach Control
- IFR from ARTCC handoff through to Tower.
- Radar separation/sequencing for IFR; assists VFR.
- Arrival info on initial contact.

### Flight Service Station (FSS)
- Primarily civilian (military may use).
- Common freqs **122.2** and **255.4**.
- Flight plans, ARTCC relay when comms are hard, lost-aircraft assist, PIREPs.

---

## 2. IFR clearances & readbacks

### Normal clearance elements
Aircraft ID · clearance limit · departure instructions or SID · route · altitude · departure frequency · IFF/squawk · holding (if any) · other as required.

### Readback rules
- **Training command:** read back **all** clearances **verbatim**.
- **Real world:**
  - Must read back **runway assignment** and **hold-short** instructions.
  - Read back deviations from the filed plan to show acceptance.
  - Same-as-filed items generally need not be read back (except runway/hold-short).
  - **Refuse** unacceptable clearances and get a new one.
  - Precede readbacks with call sign.
- Reading back implies **acceptance** unless you first **refuse and state reasons** (gouge / NAV0102).

### WARNING — intermediate fix off your route
Do **not** accept a clearance to an intermediate point **not on your filed route** and **short of destination** without first obtaining **expected further routing**. If you go NORDO later, AVEF needs that “Expected” piece.

---

## 3. Mandatory voice reports (FIH §B)

- **Holding:** always report entering/leaving — **except** military terminal + radar contact + instrument training.
- **Level at new altitude:** generally **not** required — **except in RVSM (FL290–FL410)**.
- **Not in radar contact** — additional reports without request (gouge “all of the above”):
  - Leaving FAF/OM inbound.
  - Estimate error **> 3 minutes**.
  - Unforecast weather or forecast hazardous weather encountered.

---

## 4. Lost communications (NORDO)

### Initial actions (all weather)
1. Squawk **7600**.
2. Try other / previous frequencies.
3. Guard **243.0** (UHF) and **121.5** (VHF).
4. ATC will try Guard and available **NAVAID** freqs.

### Primary objective
Preclude **extended IFR** in the ATC system while in **VMC**; land **as soon as practicable** — not “any unsuitable / unauthorized field” or minutes short of destination just to get down.

### VMC
- Maintain VMC; land ASAP at a suitable authorized field.
- Prefer VFR cruising altitudes: **East odd / West even + 500**.
- Watch Tower light signals; acknowledge by **rocking wings** (day) or **flashing lights** (night).

### IMC — AVEFAME
Continue IFR using **AVEFAME**: pick route (**AVEF**), altitude (**AME** — highest), and when to leave the clearance limit.

**Route priority (AVEF)**
1. **A**ssigned route in last clearance.
2. If **V**ectored — direct to the fix/airway specified in the clearance.
3. **E**xpected further routing (if advised).
4. **F**iled flight-plan route.

**Altitude — fly the highest of (AME) for each segment**
- **A**ssigned in last clearance.
- **M**inimum IFR (MEA, MOCA, ESA, MSA, OROCA).
- **E**xpected altitude from ATC.

**Leave clearance limit**
- Fix **from which an approach begins:** descend/approach as close as possible to **EFC** if received; else to **ETA (T/O + ETE)**.
- Fix that is **not** an approach fix: leave at **EFC** if received; else **upon arrival** over the limit.

### Special NORDO scenarios (gouge + NAV0103)
- **GCA pattern ≤ 25 NM, IMC:** maintain the **higher of last assigned or published MSA** until established on a published approach segment.
- **Enroute IMC:** last assigned altitude, **no lower than MEA** for each segment; squawk 7600.
- **Circle → lose visual / inadvertent IMC:** missed approach for the **original** approach, **not** the circling runway.
- **NORDO after missed → alternate:** squawk 7600; fly published MAP; proceed as filed; commence approach. A **DRAFT** gives **route** but **not altitude**. Altitude options if none expected: MSA out to 25 NM; ESA if fields within **200 NM**; or **18,000** (altimeter ≥ 29.92) / **FL190** (altimeter < 29.92).

---

## 5. In-flight emergencies

- Squawk **7700**.
- **MAYDAY** (distress) or **PAN-PAN** ×3 (urgency).
- Then as many of: station addressed · ID/type · nature · weather · intentions · position/heading · altitude · fuel remaining · souls on board · other useful info.

---

## 6. Airspeed restrictions (NAV0103)

### General (FAR 91)
- **250 KIAS** max below **10,000 ft MSL** (midair-collision hazard).
- Level above 10,000 and slow before descending lower.

**DOD exemptions:** restricted areas; MOAs; large-scale exercises / short-term special mission; military IFR/VFR training routes; when recommended safe maneuvering speed is greater; National Defense Mission.

### By airspace
| Airspace | Limit |
|----------|--------|
| Class B | **250 KIAS** |
| Class C (near primary) | **200 KIAS** within **4 nm**, SFC–**2500 AGL** (slide also notes shelves ~10 nm/1200 and 20 nm/4000) |
| Class D (near primary) | **200 KIAS** within **4 nm**, SFC–**2500 AGL** |
| Under Class B floors / VFR corridor through B | **200 KIAS** |

### Holding
- Hold at **maximum endurance**; T-45 SOP **200 KIAS**.
- Max unless otherwise depicted: Navy **230**; USAF **310**.
- Civilian: **200** (0–6000) · **230** (above 6000 through 14,000) · **265** (above 14,000).

---

## 7. Fuel reserves

- **CNAF M-3710.7:** greater of **10% of planned requirements** or **20 minutes** max endurance at **10,000 MSL**. Exam distractors love **20%** or **10 min**.
- **T-45:** always **500 lb IFR** (TW-1/TW-2 joint SOP) — that is the number you plan to.

---

## 8. Takeoff weather criteria

### Special Instrument Card
- **No** ceiling/vis mins — judgment and urgency.
- Quals: **5 years** · **2000 hours** · **100 hours** actual instrument.
- Mins may be reduced.

### Standard Instrument Card
- Base takeoff wx on **any** compatible approach: TAC / VOR / ILS / LOC / PAR / ASR.
- Non-precision: published, **not less than 300-1**.
- Precision: published, **not less than 200-1/2**.
- Gouge: with precision available for the duty runway, expect **200-1/2** (PAR mins usable).

### Formation takeoff
- ≥ published **circling** mins for the runway in use; if no circling → **1000-3**.

---

## 9. IFR departure types (5+1)

1. **Diverse**  
2. **ODP** (Obstacle DP)  
3. **SID/DP** — Pilot NAV or Vector  
4. **Specific ATC** — Radar departure + verbal non-radar  
5. **VCOA**  
6. *(+1)* **VFR Climb on Course**

### Diverse departure
- Field has ≥1 IAP; **no** obstacles penetrate the **40:1 OIS**.
- Runway heading to **400 ft AFE** before turns; climb **≥ 200 ft/nm** to a min IFR altitude.
- ATC will **not** specifically clear you. If “cleared as filed,” no published climb gradient / **Terrible T**, and no further instructions → expect diverse. Info in **front** of DOD plates.

### ODP
- Published when obstacles penetrate 40:1; usually has climb gradients and often non-standard takeoff wx.
- Non-standard wx mins **do not apply to USN/USMC**; avoid procedures that rely on see-and-avoid.
- **One** ODP per runway; **default** if no vectors/SID. “Cleared as filed” with no further instructions → fly the ODP. Front of DOD plates.

### SID (DP)
- Primary: **IMC obstacle clearance**. Secondary: efficiency / fewer radios / less delay.
- **Not mandatory** under CNAF but **encouraged** (DD-175 / DD-1801). Graphics at the **rear** of approach plates.
- May require higher takeoff wx (e.g. **300-1**) even if PAR/ILS is **200-1/2**.
- **Pilot NAV** — you navigate; file identifier in route (e.g. **NQI3 CRP** Kingsville Three / CRP transition).
- **Vector SID** — ATC vectors (hybrid); file identifier (e.g. **CHA7 CHA**). Example string: `CHA7 CHA DCT RMG DCT MGM J39 CEW DCT INBRD DCT JAYDI DCT NPA`.

**SID cancel / altitude**
- Vectored or cleared off the SID → SID **cancelled** unless “**expect to resume SID**.”
- Reinstate: ATC must state remaining routing **and** restate altitude restrictions.
- Restated altitude → **climb immediately** unless restrictions remain in effect; **still fly the ground track**.
- Gouge classic: cleared DP, then “climb and maintain FL350” → climb **immediately** to FL350 and proceed **direct to the DP transition point** (unless SID is reinstated).

### Radar departure / Specific ATC
- Use when no SID, or you want direct to first route point.
- File **DCT** + fix first; Remarks **REQUEST RADAR DEPARTURE**.
- Also includes verbal non-radar guidance.

### VCOA
- Visual climb over airport/NAVAID when gradients/terrain preclude a conventional DP.
- **No** identifier — Remarks that you intend to use the VCOA. Front of DOD plates.

### VFR Climb on Course
- Stay VFR below Class A until IFR pickup; Remarks **REQUEST VFR CLIMB ON COURSE**.
- Sample: “Jacksonville Center, ROKT 21, VFR over Seminole at one zero thousand five hundred, looking to pickup my IFR flight plan to Navy Pensacola.”

---

## 10. STARs

- Pre-planned IFR arrival from enroute structure to outer fix or IAF.
- Maintain **last assigned altitude** until authorized to descend.
- **DESCEND VIA** = lateral **and** vertical nav per the procedure / published restrictions.
- Decline: Remarks on DD-1801 (**preferred**) or “No STAR” on initial contact.

**LEMIG ONE (Cotulla) example**
- COT via **R-037** → LEMIG → SAT **R-175** → ELKAY → expect vectors.
- Turbojets: expect to **cross LEMIG at 10,000′**.
- SAT APP CON **125.7 / 381.4**.

---

## 11. Instrument approaches (NAV0103 + gouge)

### SFA (Single Frequency Approach)
- Single UHF to touchdown for military single-piloted turbojets at **night or IMC**.
- Depicted in IFR Supp; request from ATC.
- CNAF: SHALL provide to max extent. Without SFA, minimize freq/code changes below **2500 AGL**.

### Single-pilot / T-45 weather
- Absolute: **200 HAT** and **½ SM / 2400 RVR**.
- T-45: **200-1/2 or published, whichever higher**.
- Raise DA by **(200 − published HAT)**.
- **KNQI example:** published DA **150**, HAT **100** → single-piloted DA **250**.
- Same idea on PAR plates (NAV0104 / gouge Meridian): add **+100** to HAT/DA (e.g. published 100 HAT → plan **200 HAT**).

### Commence / continue / practice
- Do **not commence** at dest/alternate if wx is **below** mins.
- If mins go down **after** you start → you **may continue** to published mins (pilot discretion).
- Practice to mins only at **enroute** fields with **no intent** to land at filed dest/alt.

### Formation approaches
- **>2** aircraft: IMC approaches (with or without intent to land) **not** authorized; IMC→VMC penetration OK.
- **2-ship:** ≥ circling mins, or **1000-3** if no circling.

### Visual vs contact

| | Visual | Contact |
|---|--------|---------|
| Who requests | Controller **or** pilot | **Pilot only** |
| Weather | **1000 & 3** | **1 SM** vis; remain outside clouds |
| Sighting | Field **or** preceding traffic | Visual ref to surface; expectation to continue |
| IAP / MAP | **Not** an IAP; **no MAP** | **Is** an IAP; MAP provided |
| FP | Does **not** cancel FP | IFR authorization |
| Notes | Pilot owns interval/wake if following; cloud clearances N/A unless ops specs (500/1000/2000) | “At or below” ≥1000 below IFR traffic and **not below MSA** |

### Circling
- Use circling mins; when runway environment in sight, state intentions and circle by any safe method unless restricted.
- Do **not** descend below MDA just to stay clear of clouds.
- **Lose visual:** climb immediately; initial turn **toward the landing runway**; continue until established on the **published MAP course** for the **original** approach.

### Leaving IAF altitude
- Radar vectored or **DIRECT** to IAF → hold last assigned altitude.
- After approach clearance, descend when **established on a published segment** (cross IAF → shortest turn → FAF).

### Missed approach
- At MDA with no visual at MAP → miss.
- Tell ATC: **“executing missed approach.”**
- Cleared for the approach ≠ cleared to land.

### VDP / VDA
- **VDP:** advisory point on the FAC for a normal ~**3° / 300 ft per NM** descent from MDA (when MAP would otherwise preclude it).
- **Dive-and-drive:** descend to MDA after FAF, level to MAP.
- **Constant-angle:** continuous descent through the VDP.
- **VDA:** angle from FAF to threshold at **TCH**.

---

## 12. VOR MON, closing the flight plan, logbook

### VOR Minimum Operational Network
- Conventional backup if GPS/GNSS is lost.
- CONUS coverage at/above **5000 AGL**.
- Proceed to a MON airport and fly **ILS or VOR** without GPS/DME/ADF/surveillance; rarely more than **100 NM** away.
- FLIP Low Altitude legend: **BLUE/GREEN** = IAP and/or radar mins published; **BROWN** = none; dedicated **Military MON** airport symbol.

### Closing the flight plan
- Military: **verbal** with Tower or Base Ops.
- Civilian: FSS by any means available.

### Logbook — “Cover Your Six”
Track medical, approaches, IFR/total time, flight types; verify entries get logged.

---

## 13. Reading approach plates (NAV0104)

### Where plates come from
FAA.gov PDFs (high/low approaches + IFR charts); printed **NGA High Approach Playbook**; ForeFlight / SkyVector ultimately pull from the same sources.

### Header block
- Approach title, airport ID, navaid/course data, runway length, **TDZE** / field elevation.
- **Trouble T** — takeoff issues (often lighting-related notes).
- ALS code (e.g. **A5**); **dot above** = sequenced flashers / strobes.
- Narrative missed approach.
- Frequencies in use order: **ATIS → Approach → Tower → Ground → Clearance**; ASR/PAR note if depicted.
- ATIS with **star (*)** → operates on a **noncontinuous** basis (gouge).

### Plan view
- Often a **20 NM** to-scale circle (obstructions as MSL heights, holding at IAF, etc.).
- **MSA:** typically **~25 NM** about the defining navaid; may be quadrantized.
- **Emergency Safe Altitude:** out to **100 NM**; **1000 ft** obstacle clearance flat / **2000 ft** in designated mountainous terrain.
- Low plates may omit ESA — use chart **OROCA** (same 1000/2000 idea).
- **Pilot-controlled lighting:** black circle / white lettering ALS symbology.

### Profile & minima
- Glidepath angle, **TCH** (AGL), GS intercept altitude, pictorial missed (matches narrative).
- Straight-in and circling minima lines; military mins often in **parentheses** (e.g. **200-½**).
- **CNAF 3710 single-pilot:** plate may show **18 RVR**, but you need **no lower than ~24 RVR (½ mi)**.
- **Inoperative components:** approach assumes all components (incl. lighting) work. Example: MALSR OTS on an 1800-RVR ILS → bump RVR to **4000 (~¾ mi)** per table/note — always check plate-specific notes.

### Airport sketch / full-page diagram
- Arresting gear, barriers, **displaced threshold** (usable for takeoff roll and landing rollout — **not** for touchdown).
- Hot spots (front-matter explanations); lat/long grid for building waypoints; runway gradient.
- **LAHSO:** T-45s are **not really authorized** for land-and-hold-short.

### Glide-slope check & timing
- At OM/FAF, centered GS should match published GS altitude (e.g. Tuscaloosa **1433**).
- Mismatch → suspect transmitter / altimeter / temp; consider transitioning to **localizer** — start the clock at the FAF; use the timing table.
- Descent gradient table (inside back cover): e.g. ~**637 fpm** for a **3°** path at **120 kt** GS.

### Radar minima (PAR / ASR)
- Lookup alphabetically in the radar minima section.
- Single-pilot 3710: add **+100 ft** to HAT/DA (Meridian example: published 100 HAT → plan **200 HAT** / higher DA).
- PAR without GS ≈ ASR technique with somewhat lower mins than straight ASR.

---

## 14. NAVAIDS, filing, and exam gouge highlights

### Service volumes & related
- High-altitude NAVAID interference-free range (jet routes): **130 NM**.
- **(L) VOR:** up to **18,000 ft AGL** out to **40 NM**.
- **LOC:** **18 NM** within **10°** of centerline; **10 NM** within **35°**.
- GPS: passive receivers; triangulation from ≥ **4** satellites for lat/long/**vertical** (3 for lat/long only is a common distractor wording — read carefully).

### Filing / alternates
- **Official Business Only** fields: may **not** be designated as an IFR alternate.
- DPs on DD-175: **encouraged, not mandatory**.
- Preferred IFR routing: **FLIP AP/1**.
- Alternate filing: watch NOTAMs (GCA OTS, ALS OTS, GS OTS). Lowest usable non-precision + adders matter; ASR mins live in the **front** of approach plates.
- ATIS with airport info but **no weather** at Meridian-style fields often implies **VFR ≥ 6000-5**.

### Scenario fields to tab
Meridian NAS (don’t confuse with Meridian/Key Field) · Maxwell AFB · NAS Jacksonville · Columbus AFB. Know how to pull circling mins, PAR mins with the single-pilot bump, and TACAN channel IDs (e.g. Montgomery HI ILS arc off **MXF Ch 97**).

### Arc / radial lead points (gouge reminder)
- Arc → radial: **(60 / arc NM) × 1% GS**
- Radial → arc: **1% GS**

### PAPI symbology
Often denoted in the IFR Supp lighting column (e.g. **“50”**).

---

## 15. Study flow suggestion

1. Memorize the **Quick reference** table.
2. Drill **AVEFAME** and the Special vs Standard card takeoff floors until automatic.
3. Walk a full IFR profile: clearance → diverse/ODP/SID → STAR descend-via → approach (visual/contact/circling/miss) → NORDO alternate altitudes.
4. Open a real plate (Atlantic City ILS, KNQI PAR/ILS, Meridian PAR, Maxwell TACAN) and label header / MSA-ESA / profile / minima / inop notes aloud.
5. Hit the local quizzes: Gouge · NAV0102 · NAV0103 (40 Q) · NAV0104.

---

*Compiled from t45-nav-packs (gouge, nav0102, nav0103 expanded 83 cards, nav0104). For training use; always defer to current FLIP, CNAF M-3710.7, and local SOP.*

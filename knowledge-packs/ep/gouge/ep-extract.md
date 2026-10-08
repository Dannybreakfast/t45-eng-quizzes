# T-45C Student Gouge — Emergency Procedure (EP) Extract

**Source:** `/workspace/t45-nav-packs/gouge/drive-source.pdf` (86 pages; every page is a scanned image, so `pdftotext` returned no text). Pages were rendered at 300 dpi and run through tesseract 5.5 (`--psm 6`, plus `--psm 3` as a cross-check). Every EP page was also checked by eye against the scan, and handwritten material was transcribed by hand. Page 73 is scanned sideways and was rotated before OCR.
**Age of source:** the PDF was created in Dec 2007, so this gouge comes from the **old (~2007) NATOPS/EP era**. Where it disagrees with the current IC 21/43 (Nov 2023) immediate-action list, the current list wins (see §20).

**Conventions**
- Text in quotes and blocks is **verbatim**. Spelling, typos, and the authors' wording are kept, including "Air Flow Know" and "stats" for slats. I removed OCR noise only. Original numbering, lettering, bullets, and dashes are kept.
- `[p.NN #x]` = source page and item number. `[p.NN]` = page with no item number.
- `[?]` = word I'm unsure of (handwriting or a poor scan). `[illegible]` = could not be read.
- `[hw: …]` = handwritten note added by the gouge's owner on a typed page.
- `~~text~~` = struck through or scribbled out in the source.
- Typed gouge sections in the PDF: **"Engineering Timms Gouge"** p.3–4 · **"Timms Gouge EP Test 1"** p.5–6 · **"EP Test 2"** p.7–8 · **"EAGLE EP GOUGE – EP 06X"** p.59–60 · **"PRESS" E.P. GOUGE** p.64, 66 · **"EP 11X"**, two versions: low-quality print p.68, 70–71, 73, and clean print p.74–77. Handwritten EP sheets: p.58, 61–63, 65 ("EMEP-06X Exam Gouge 'Jolly Rodgers'"), 67, 69, 72.

**Contents:** 1 Boldface/study notes · 2 Ground emergencies · 3 Abnormal starts/Clear engine · 4 Takeoff emergencies/Abort · 5 Catapult/carrier · 6 Engine malfunctions & airstarts · 7 Fire in flight · 8 Ejection · 9 Hydraulic failures · 10 Electrical · 11 ECS/oxygen/smoke/canopy · 12 Flight controls · 13 Gear/hook/brakes/NWS · 14 Landing emergencies · 15 Instrument/avionics failures · 16 Misc · 17 Engine limits · 18 Spin/aero · 19 Coverage vs. pack · 20 Discrepancies vs eps-pack.js · 21 Unreadable/uncertain

---

## 1. "Know the boldface" / study-emphasis notes

- "✱ KNOW THE BOLD FACE" [p.65, handwritten]
- "MEMORIZE ① FIRE ② GTS FIRE ③ GENERATOR FAILURE" [p.66, hw]
- "3-4 questions that deal with procedures for COMP Stall and EGT RPM Light. Know the first 3 steps in that procedure and that's 3-4 free questions." [p.5 #20]
- "Executing the Engine Fire Emergency Shutdown on the Ground, state the procedures verbatim" [p.5 #22], answered on p.6: "(A,E,B,D,F, if different use PCL!) 1) Throttle OFF, 2) Engine Switch-OFF (both Cockpits), 3) Fuel Shutoff – PULL, 4) BATT switches – OFF, 5) Emergency Egress"
- "✱ KNOW ELECTRICAL FAILURE VERBATIM" [p.67]
- "✱ LEARN ALL CAUTION LIGHT EP'S VERBATUM (Kidding) / ✱ IF YOU DO THE CAUTION LIGHTS VERBATIUM YOUR A JACKASS!" [p.67]
- "Two 40 question tests: this gouge is what we could remember in no particular order." [p.64]
- "18. Don't worry about PA procedures" [p.66]
- "-know engine fire indications (light, tone, etc)" [p.3]
- "-Know limits chart and what would be an overstemp, max egt on start including overshoot (RTFQ!)" [p.3]

---

## 2. Ground emergencies (emergency shutdown / egress, fire on deck, GTS fire, TP HOT)

### 2.1 Engine Fire Emergency Shutdown on the ground
- p.5 #22 → p.6: "(A,E,B,D,F, if different use PCL!) 1) Throttle OFF, 2) Engine Switch-OFF (both Cockpits), 3) Fuel Shutoff – PULL, 4) BATT switches – OFF, 5) Emergency Egress"
- p.77 (EP 11X):
  ```
  35. Know Engine Fire on deck procedures
      a. Throttle – Off
      b. Fuel Shutoff Handle – Pull
      c. Battery Switches – Off
      d. Egress
  ```
  [hw: "ENG Switch OFF", bracketed and arrowed to step a of items 34 and 35]
- "11. What requires an immediate shutdown on deck w/out 2ndary indications- FIRE light illums" [p.5]
- "25. Fire light on ground (new procedures… get out of airplane and don't worry about telling anyone over the radio… no comms in procedure)." [p.60]
- "13. Which of these indicate you might have an engine fire on Startup? Fire light, Increased FF, Rapidly increasing EGT? ALL OF THE ABOVE." [p.59]

### 2.2 GTS Fire (on deck / in flight)
- p.76 (EP 11X):
  ```
  30. Know GTS Fire on deck procedures
      a. Engine switch – Off
      b. Throttle – Off
      c. Fuel Shutoff Handle – Pull
      d. Battery Switches – Off
      e. Egress
  ```
- "26. GTS Fire on deck: Emergency Shutdown" [p.6]
- "16. GTS fire- Emergency engine shutdown" [p.7]
- "12. There are two GTS Fire questions with the same answer… Engine Switch Off is the first step." [p.59]
- "✱ GTS FIRE FIRST STEP: ~~THROTTLE~~ ① ENGINE SWITCH – OFF ② TROTTLE – OFF" [p.65, hw]
- "(E) GTS Fire Warning Light is illuminated because there is an overtemperature condition in the GTS compartment. (not b/c there is a fire in the GTS burner can.)" [p.62, hw, "6X Corrections – ELLINGTON"]
- "(H) GTS Fire requires an emergency egress" [p.62, hw]
- "29. GTS fire in flight" [p.66], listed as a test topic with no answer given

### 2.3 TP HOT (Tailpipe Hot) caution light
- p.77 (EP 11X):
  ```
  34. Know Tailpipe Hot on deck caution light procedures
      a. Throttle – Off
      b. Fuel Shutoff Handle – Pull
      c. Battery Switches – Off
      d. Egress
  ```
  [hw: "ENG Switch OFF" bracketed to step a]
- "7. TP HOT caution light on deck is same as FIRE light on deck (Same procedures to deal with both)." [p.59]
- "13. TP HOT lights on deck: get out! Same exact procedures as fire on deck." [p.64]
- "26. TP HOT is a CAUTION LIGHT (yellow) and not a WARNING LIGHT (red)… don't get drawn off by any answers where they give you a FIRE light and a TP HOT light and ask which warning light causes you to egress! RTFQ!" [p.60]
- "12. When flying @ 15K, TP HOT light- Throttle idle (min safe flight)" [p.5]

### 2.4 Ground summary sheet [p.58, handwritten]
```
GROUND { TAIL PIPE HOT – EXEC. EMERG SHUTDOWN
       { FIRE          – EXEC. EMERG SHUTDOWN
       { GTS FIRE      – EXEC. EMER SHUTDOWN (I/F ENG SWITCH OFF, SECONDARY INDICATION)
```

---

## 3. Abnormal starts / Clear Engine procedure

- "36. The first step of the Clear Engine Procedure is Throttle Off." [p.77]
- "11. If you get an overspeed during start, use Clear Engine procedure (Throttle Off is the first step… not Throttle Idle)." [p.59]
- "✱ OVERSPEED START – TROTTLE OFF" [p.65, hw]
- "~~(F) If there is an overspeed condition on start, the first step is: Throttle – OFF~~" [p.62, hw; the whole item is scribbled through in the source]
- "1. Engine fails to light off with in 15 sec from putting throttle to idle – Wet start" [p.5]
- "(G) On start, if the engine does not light off 15 seconds after selecting Throttle – IDLE, the pilot should suspect a wet start." [p.62, hw]
- "-HOT START INDICATIONS (there are 2 answers so RTFQ)" [p.4]
- "-hung start indications (rpm stuck at 45 and egt rising)" [p.4]
- p.56 #168:
  ```
  168. Describe Hot, Hung, Wet starts.
       Hot: FF and RPM to normal Idle indications, but EGT rapidly to 550 or to 570 for more than 10 seconds
       Hung: RPM stagnates IVO 45% but EGT continues to rise
       Wet: FF rises normally, but no EGT/RPM within 15 seconds of idle
  ```
- "DEFINE DIFFERENCE BETWEEN ABNORMAL STARTS" [p.36, hw], with a start-timeline sketch: "START: GTS → 20 SEC LIGHT ILLUM / ENG START SWITCH ON → 15 SEC FOR READY LIGHT / THROTTLE IDLE → 15 SEC FOR LIGHT OFF / BLEED VALVE OPEN – LOOSE[?]". Timeline: "20 SEC … GTS ADVISORY LIGHT | 15 SEC READY LIGHT + 15% N2 | 15 SEC ENGINE LIGHT OFF | 30 SEC … 52%[?] N2 IDLE; 45% N2 OR GTS WILL DECELERATE TO IDLE (45 SEC)"
- Start limits [p.56 #175]: "Start Limits: FF: 300-400 / EGT: 550 (570 for 10 sec) / RPM: 52 +/-2 (within 30 seconds of idle"
- "3. Ready Light = N1 @ 100 RPM in correct direction with ignitors energized." [p.59]; "8. READY light = N1 100 RPM in correct direction and ignitors energized" [p.64]

---

## 4. Takeoff emergencies (abort, fire on takeoff, red lights)

### 4.1 Abort
- "9. Abort procedures- IDLE, BOARDS retract, BRAKES, HOOK (1000 ft. prior)" [p.5]. *Note: "retract" conflicts with p.7 #25 and the current EP, which both say extend.*
- "25. Abort takeoff- Idle, extend, brakes as req, hook 1000 ft prior" [p.7]
- "23. Abort procedures (you have to order them from a list)." [p.60] [hw in margin: "ABORT: THROTTLE IDLE"]
- "28. Abort for red lights on takeoff when less than refusal speed." [p.60]
- "(C) FOR AN ABORTED T/O: DO NOT TURN ANTISKID OFF (assuming no blown tire)" [p.62, hw]
- Takeoff-flow abort cue (normal-procedures flow sheet): "ICS 'airspeed is alive, 90kts (before or at the gear, otherwise abort), good jet going flying, 120 rotate'" [p.83] (OCR read "ars is alive"; the scan shows "airspeed[?] is alive")
- Aero: "33) Max abort speed- commence stop on remaining runway without using over run or arresting gear." [p.2]; "Max Abort 125 – not 129 –" [p.25; same note on p.16, 18]

### 4.2 Fire on takeoff
- "11. Engine Fire on Takeoff = if able, ABORT, if unable and fire confirmed EJECT." [p.74]
- "19. Fire on takeoff = Abort, if unable and the fire is confirmed then EJECT." [p.60]
- "21. Fire on t/o: if able: abort, if unable and fire is confirmed: EJECT" [p.66]
- "-first indication of a fire on takeoff Is the fire light (true)" [p.3]
- "Fire light is first indication of FIRE during T/O [hw: TRUE]" [p.47, hw]

### 4.3 Blown tire on takeoff → see §14.1

---

## 5. Catapult / carrier emergencies

- "13. On cat stroke, aircraft settles- Throttle full, check 24 AOA, if settle continues Eject" [p.5]
- "28. Settling off catapult- throttle check full forward, 24 AOA" [p.8]
- "20. Aircraft Settling off Cat = Throttle at full, maintain 24 units AOA, if settle not stopped then EJECT." [p.60]
- "22. A/C settling off cat: check throttle full fwd, maintain 24 units AOA, if settle not stopped: EJECT" [p.66]
- "12. Aircraft Settling Off Cat = check throttle full forward, maintain 24 units AOA, if settle not stopped EJECT." [p.74]
- "✱ SETTLING OFF CATAPULT – MAINTAIN 24 UNITS AOA" [p.65, hw]; "✱ Settle off CAT – 24 UNITS AOA" [p.67, hw]
- "34. Settle off CAT – Throttle ✓ full forward / Maintain 24 u AOA / If not stopped / Eject." [p.73, hw]
- Engine failure on the catapult:
  - "15. Engine failure on cat stroke and unable to eject- ditch straight ahead" [p.5]
  - "13. Engine failure catapult- Eject" [p.7]
  - "6. Engine Failure off Cat = EJECT (if unable then ditch straight ahead)." [p.59]
  - "12. Engine failure off cat: EJECT. If unable to eject off cat: ditch straight ahead" [p.64]
  - "✱ ENGINE FAILURE DURING CATAPULT – ① EJECT ② [if] NOT POSSIBLE DITCH STRAIT AHEAD" [p.65, hw]
- Launch bar:
  - "29. Launch bar warning light after cat launch- divert to shore, min. descent rate landing with arresting wires removed" [p.8]
  - "20. If you get a Launch Bar warning light at the boat, you want to divert to a field and make a flared landing after they strip the short field arresting gear." [p.75]
  - "17. Question about launch bar landing: true" [p.64]
  - "L-BAR EXTENDED → LAND PAST ARREST GEAR" [p.72, hw]
  - "14. Launch bar system is – electrically controlled, mechanically extended, and hydraulically retracted" [p.5]; "-L Bar is mechanically raised and hydraulically lowered" [p.3]; "L BAR – ELEC. CONTROLLED, HYDRAULICALLY EXT, MECH RETRACTED" [p.60, hw]
- "BLOWN TIRE DURING CAT LAUNCH" [p.69, faint hw topic list]

---

## 6. Engine malfunctions in flight

### 6.1 Compressor stall / Engine stall / EGT-RPM warning light
- "2. Audible bang, Increase EGT, RPM lowers = Engine Stall" [p.5]
- "-Loud pops/bangs…rpm down EGT up = comp stall" [p.3]
- "18. Compressor stall- IDLE, Neutralize, monitor" [p.7]
- "24. First step in the EGT/RPM warning light: Neutral/IDLE" [p.6]
- "2. Engine Stall = Throttle Idle, Controls Neutralize, EGT/RPM Monitor." [p.59]
- "16. Compressor Stall first step is Throttle Idle – min for safe flight." [p.59]
- "17. Compressor Stall (or engine stall) is characterized by "pops and bangs" and an increase in EGT and decrease in RPM." [p.60]
- "7. Engine stall: throttle _ idle, controls_ neutral, EGT/RPM_monitor" [p.64]
- "5. Engine Stall (or compressor stall ) first step is Throttle – Idle." [p.74]
- "✱ STALL – FIRST STEP ① TROTTLE – IDLE (BANGS, EGT ↑, RPM ↓) -VS- FLAMEOUT – FIRST STEP ① TROTTLE – OFF / STALLS – DO YOU PERFORM AIRSTART – NO / DO YO PULL EMERG O2 – NO } ② first / FLAMEOUT – YOU DO THOSE FIRST" [p.65, hw]
- "Engine Stall / Comp Stall – ↑EGT ↓RPM FF same" [p.61, hw]
- "120. How do you determine that the engine is locked in stall? EGT over 450 for 6 seconds after selecting idle" [p.54]
- "121. What does EGT/RPM light mean? EGT > 650 +/-8 or RPM 112.4 +/-1.0 (N1 RPM)" [p.54]; "-EGT/RPM light = 650 +/-8 or 112.4 +/-1 N1 RPM" [p.3]

### 6.2 Engine failure / flameout: ejection criteria
- "-Flameout below 1500 AGL AND 180 kias = eject" [p.4]
- "8. Just flamed out, airspeed is 150 and at 1000' you should – Eject" [p.5]
- "2. Eject if below 1500 AGL and below 180 knots" [p.7]
- "18. Engine failure below 1500' AGL and 180 KIAS = EJECT (always)." [p.60]
- "20. Engine failure below 1500 AGL and 180 KIAS: EJECT" [p.66]
- "10. Any Engine Failure below 1500' AGL and 180 KIAS = EJECT." [p.74]
- "Have enough time for Airstart need 1500' AGL and 180 KIAS." [p.38, hw]
- "118. What is the min airspeed / altitude to initiate restart after flameout? 1500' / 180 kts" [p.54]
- "119. What is the prime indicator of engine seizure? RPM rapidly decays to zero." [p.54]

### 6.3 Airstarts (Immediate / Windmill / Assisted)
- p.77 (EP 11X):
  ```
  33. Know Immediate Airstart Procedures
      a. Throttle – Off
      Simultaneously perform steps 2 and 3
      b. GTS – Press and Hold
      c. Throttle – Idle
  ```
- "14. Immediate Airstart- Pull Emerg. Oxygen actuator, throttle off, GTS button, idle" [p.7]
- "✱ IMMEDIATE AIRSTART – ON ANY ENGINE FAILURE!! (except ↓1500 <180" [p.65, hw; right edge cut off in the scan]
- "29. Know Airstart altitudes for Immediate, Assisted, and Windmill (Immediate has no altitude restrictions)." [p.60]
- p.58 (hw):
  ```
  AIRSTARTS
  IMMEDIATE – ANY ALT
  WINDMILL  – <25000' MSL, 13% N2 MIN
  ASSISTED  – < 15,000' MSL, <20% RPM – GTS LT ON
  ```
- Windmill parameters:
  - "24. Windmill airstart parameters- below 25K, 13%, min 250 kts" [p.7]
  - "✱ WINDMILL ↓25K, 13% min RPM, +250 KIAS" [p.67, hw]
  - "26. Windmill Airstart = <25K, Min 13% N2 RPM, Recommended minimum of 250 KIAS." [p.76]
  - "35. Windmill Airstart – ↓25K, 13% min RPM, 250 KIAS or great[er]" [p.73, hw]
- "No airstart – FIRE in FLT" [p.61, hw]; "✱ FIRE WARNING LIGHT – DO NOT DO AIRSTART, PREPARE FOR EJEC[TION]" [p.65, hw]
- Limits: "78. What is the minimum RPM for Air Start? 13%" [p.52]; "600°C maximum EGT during air start [hw: (NO MORE THAN 650 FOR 10 SEC)]" and "50°C maximum overshoot above 600°C during airstart (10 sec max)" [p.37]; "600 airborne start (650 overshoot 10 seconds)" [p.56 #177]; "28sec. Maximum allowable time for GTS advisory light to illuminate while in flight [hw: FOR AIRSTARTS]" and "30sec. Time ignition system remains on after GTS button release during airstart" [p.37]; "60sec. Time bleed valve remains open after GTS assisted airstart using manual fuel" [p.37]; "When airborne, ignition is provided when 1. GTS button is pressed and for 30 sec after release, 2. ENGINE Switch set to START, and 3. ROTATION is ON." [p.39]; "Airstarts require throttle modulation" (manual fuel control) [p.38]

### 6.4 OIL PRESS warning light
- "5. Power setting for OIL PRESS light = min for safe flight." [hw: "MINIMIZE THROTTLE MVMTS"] [p.59]
- "10. Power setting for oil press light: idle." [p.64]
- "Oil press light – min" [p.61, hw]
- "30. OIL PRESS light goes out at approximately 18% on start." [p.60]; "170. OIL PRESS light goes off at ___ on engine start. 18% [hw: (18-20)]" [p.56]
- "10psi oil pressure differential below which the OIL PRESS caution light illuminates" [p.37]

### 6.5 ECA 2 caution light / ECA failure
- "7. ECA 2 Caution light- land as soon as practical and do not exceed 90% above 20K MSL, 95% below 20K MSL, do not exceed 600 deg EGT" [p.5]
- "24. ECA 2 caution light means Throttle <90% above 20k and <95% below 20k." [p.60]
- "33. Question about ECA fail: know that it's 90% above 20K and 95% below 20K." [p.66]
- "✱ ECA2 CAUTION LIGHT – ① DO NOT EXCEED 90% ↑ 20,000' or DO NOT EXCEED 95% ↓ 20,000, DO NOT EXC[EED] 600°C EGT" [p.65, hw]
- "ECA 2[?] 90/95" [p.61, hw]
- "-ECA failure dual lane full and no trim indicaitons" [p.3]
- "19. If you have an ECA failure (full trim) what changes would the engine instruments indicate? —decrease in EGT, RPM, and FF [hw: Master alert, ~~[struck]~~, tone, ECA 2 caution light]" [p.31]
- "19. T/F Losing one of the ECA lanes will illuminate the ECA Caution LT. False. Losing one lane will illuminate the ECA advisory light. / 20. Describe the verifications of an ECA failure (Full Trim). RPM decreases, EGT decreases, FF decreases / 21. Describe the verifications of an ECA failure (NO Trim). RPM increases, EGT increases, FF increases" [p.47]
- "95% N2 rpm not to be exceeded in manual fuel control in order to prevent N1 overspeed below 20,000 ft. / 90% N2 rpm not to be exceeded in manual fuel control in order to prevent N1 overspeed above 20,000 ft." [p.37]

### 6.6 ACCEL caution light / bleed and steam-ingestion valve
- "3. During descent passing 7000 MSL, ACCEL Caution light – expect slower engine acceleration during an approach" [p.5]
- "15) Engine: With normal engine instrument indications (rpm, EGT, FF) on t/o roll what other indication of loss of thrust could you have besides failure to reach line speed? —ACCEL caution light illuminates / 16) T or F: Illumination of the ACCEL caution light indicates the initial shot solenoid or the steam ingestion bleed valve is not in the commanded position. T" [p.31]
- "115. ACCEL light means what? Steam Ingestion Valve stuck open (10% loss of thrust), or Initial Shot of Fuel Solenoid is not in commanded position" [p.54]
- "24. What are the verifications of a steam ingestion valve failure? OPEN – RPM lower, EGT higher, decreased thrust and acceleration / CLOSED – Engine surge/stall due to steam ingestion (cat. shot)" [p.49]
- "-something about thrust loss with the bleed valve stuck open" [p.3]; "Failure of bleed valve to close will cause loss of thrust at MRT." [p.49, hw]

### 6.7 Fuel: LP PUMP / F PRESS / FUEL LOW
- "10. LP PUMP light in flight- avoid abrupt throttle movements and set min for flight" [p.5]
- "LP Pump – ↓35 psi" [p.61, hw]; "35psi pressure below which the LP PRESS caution light illuminates" [p.37]
- "17. After F PRESS light illuminates and checking engine switch on you should- avoid negative G maneuvers" [p.5]
- "-F Press light for boos[t] pump failure" [p.3]
- "F Press Caution light illuminates 30 sec after[?] GEN fail or if one of the engine switches is not on." [p.61, hw]
- "30 sec. Time period I[n] seconds fuel boost pumps continue to operate after GEN failure to conserve battery power" [p.39]
- "The FUEL PRESS caution light illuminates when 1. There is insufficient differential pressure across a boost pump (such as an inoperative pump), or 2. The fuel tank air pressure regulator drops below 3 psi." [p.39]
- "-T handle separates engine from aircraft fuel system" [p.3]; "122. How do you shutoff fuel to Engine and GTS? Fuel Shutoff T handle" [p.54]; "T/F Opening the fuel shutoff valve disables GST ignition in addition to securing fuel (TRUE)" [p.39]
- "350 lbs. Approximate fuel quantity remaining with FUEL LOW caution light illuminated" [p.39]; "22. At what quantity of fuel does the FUEL Caution LT illuminate? 350lbs" [p.47]

---

## 7. Fire in flight

- p.76 (EP 11X):
  ```
  31. Know Engine Fire in Flight procedures
      a. Throttle – Idle (min for safe flight)
      b. Secondary Indications – Check
      If secondary indications exist –
      c. Emergency Oxygen Actuator – Pull
      d. Throttle – Off
      e. Fuel Shutoff Handle – Pull
      If secondary indications persist –
      f. EJECT
      If fire is extinguished –
      g. Prepare for controlled ejection
      If unable to eject -
      h. Prepare for Flameout Approach
  ```
- "36. Fire light in flight- Idle, instruments check, secondary-eject" [p.8]
- "22. Fire light in flight = first step is Throttle idle (min for safe flight)." [p.60]
- "18. While cruising 23K you get FIRE light, with 2ndaries- EJECT (not prepare for controlled ejection)" [p.5]
- "(B) With a confirmed in-flight fire, after setting throttle to OFF and pulling the fuel shutoff there are no more secondary indications… you should: PREPARE FOR A CONTROLLED EJECTION" [p.62, hw]
- "✱ FIRE WARNING LIGHT – DO NOT DO AIRSTART, PREPARE FOR EJEC[TION]" [p.65, hw]; "No airstart – FIRE in FLT" [p.61, hw]
- "27. Fire in flight questions" [p.66] (topic only)
- Secondary indications:
  - "✱ SECONDARY INDICATIONS OF FIRE: EGT ↑, FUEL FLOW ↑, FIRE LIGHT" [p.65, hw]
  - "Secondaries of FIRE" [p.61, hw]
  - "What are secondary indications of fire? All of above" [p.47, hw]
  - "17) If the fire light illuminates but then goes out, what secondary indications, other than EGT/RPM light illuminating, would verify an engine fire even though the FIRE light is out: —EGT 640 C or higher and RPM is 85%" [p.31; the answer line is scribbled over in the source, so read it as doubtful [?]]
- Fire light logic:
  - "-if the fire light comes on then turns off = temp below 300 or burn through" [p.3]
  - "113. If FIRE light comes on and goes out, what should be done? Check light switch for continiuity" [p.53]
  - "123. What does FIRE LIGHT mean? Temp outside engine container exceeds 300 deg C / 124. What does GTS FIRE mean? Temp outside GTS container exceeds 300 deg C / 125. What does TP Hot Caution Light mean? Temp outside tail cone inside fuselage can exceeds 150 deg C" [p.54]
  - "300°C firewire temperature required for FIRE warning light to illuminate / 150°C firewire temperature required for TAILPIPE HOT warning light to illuminate / 45sec. Time that firewire must remain below 300°C for FIRE warning light to go out" [p.37]
  - "-NO VERIFICATION of INTERNAL tailpipe overtemp" [p.3]
  - "47. What is tested when the light test switch is put to Test position? Tests all lights minus AOA Indexers and tests Fire Detection Sys." [p.51]
- Electrical fire → see §10.3

---

## 8. Ejection

- Criteria: see §6.2 (below 1500' AGL and 180 KIAS), §5 (settle / engine failure off the cat), §7 (fire), §9 (HYD "uncontrollable").
- "27. Always trade airspeed for altitude in EJECT situations." [p.60]
- "✱ EJECTION – CONVERT AIRSPEED to ALTITUDE, IF FLIGHT CONTROLS UN-C[ONTROLL]ABLE EJEC[T]" [p.65, hw; right edge cut off]
- "32. Structural damage to the airframe may require you to blow the canopy." [p.60]
- "~electronic sequencer determines ejection mode" [p.4]; "108. Where do the inputs for ejection modes come from? Ejection sensor on seat" [p.53]
- "107. If MDC fails, will seat still breach canopy? Yes, canopy penetrators will fracture canopy glass." [p.53]
- Seat limits [p.34]: "0.4 sec back-front seat delay / 100-245 lbs New seat / 136-212 lbs old seat / 600 KIAS and 60K Max seat limits [hw: (not[?] body)] / 3-4" MDC handle travel"
- Seat system [p.44]: "18,000' MSL altitude at which drogue bridles are released during Mode 5 ejection sequence / 0.5 sec backup delay initiator between seats / 0.4 sec interseat sequencing system delay / 30-60 lbs. Force required to initiate ejection / 60-70% rpm above which SEAT UNARMED caution light will illuminate"; "4" free travel range of MDC firing handle" [p.44]
- Controlled ejection is called for in §7 (fire extinguished) and §14.1 (dual blown tires, no gear).

---

## 9. Hydraulic failures (HYD 1 / HYD 2 / RAT)

### 9.1 Procedure and answer items
- "4. HYD 2 pressure failure, RAT will maintain HYD 2 pressure at 2500-3000" [p.5]
- "(A) With a HYD 2 pressure failure RAT will produce: 2500-3000 psi." [p.62, hw]
- "16. For HYD 1 or HYD 2 Failure 1st consideration- Reduce A/S below 300 KIAS/.6 MACH" [p.5]
- "21. If you get a HYD 2 failure, monitor HYD 1 Presssure" [p.5]
- "15. With a HYD 2 failure, you monitor the HYD 1 PRESSURE GAUGE not the accumulator pressure." [p.59]
- "✱ HYD 2 FAILURE – HYD 1 PRESSURE – MONITOR (NOT ACCUMULATOR)" [p.65, hw]
- "HYD 2 Fail – what Ind." [p.61, hw]
- "23. During ACM you get a HYD caution light, RAT caution light and then the HYD light extinguishes you should: Reset HYD 2 (correct but not the first thing to do, Instructor took note & future test may be changed)" [p.6]
- "1. If your HYD 1 and 2 fail but the RAT is working fine, but the aircraft is "uncontrollable", then EJECT." [p.59]
- "~~6. Something about a hyd fail with RAT extended but the aircraft is uncontrollable. The~~ key word is "uncontrollable." EJECT! … you bet." [p.64; first line struck through in the scan]
- "14. With a HYD 1 Failure, which of these can you do for landing? Emergency extend the gear, Emergency extend the flaps, Take an arrested landing? ALL OF THE ABOVE." [p.59]
- "✱ HYD1 FAILURE – MANUAL GEAR, EMERGENCY FLAPS, ARRESTED LANDING / "WHAT DO YOU HAVE AVAILABLE, YOU DON'T HAVE GENERAL SERVIC[ES]" ANSWER: ALL THE ABOVE" [p.65, hw]
- "-A slow loss of HYD 2 pressure will not lose general services" [p.3]
- "29. What is first indication of HYD 1 slow pressure loss? 1500 psi, loss of general services (no light before AFC 244)" [p.49]
- "37. Name the general services lost when HYD 1 drops below 1500 psi. -Normal Gear Extension -Normal FLAPS [hw: /SLATS] -Normal Brakes -NWS -LBAR extension -Speed Brakes -Hook Retract" [p.49]
- "53. What is the affect on the Tailhook with a HYD 1 failure? May be lowered, but not raised." [p.51]; "138. With HYD 1 failure, does hook work? Yes. Pneumatic and snubber to put and lock down. (Can't raise)" [p.54]
- "129. If HYD 2 and RAT fail, what effect on total HYD system? None. HYD 1 still operating everything normally. / 130. If HYD 2 is leaking, will RAT do the job. No." [p.54]
- "128. What is the indication of an operable RAT? HYD 2 fluctuating between 2500-3000" [p.54]
- "114. In event of HYD failure, will ANTI-SKID or NWS lights illuminate? No. They will only illuminate with electrical system malf." [p.53–54]

### 9.2 Hydraulic failure numbers
- p.48 (hw, "HYD FAILURES"):
  ```
  3000 PSI NORMAL FOR ALL
  HYD 1                    HYD 2
   3000 PSI – NORM          3000 PSI – NORM
                            1660 ± 110 – CAUTION LIGHT
                            1500 PSI – RAT EXTENDS
                            2500-3000 – RAT POWER
                            2000      – LIGHT EXTINGUISHES
                            1800      – REQUIRED TO RESET RAT
  ```
- p.57 ("HYDs", typed with hw marks):
  ```
  HYD 1 Numbers:
   3000 psi at 9.6 gpm – EDP Out
   1100 +/- 50 psi – FC Accum Nitrogen Press
   1300 +/- 50 psi – Brake/Flap Accum Nitrogen Press [hw: emerg]
   1500 psi – Priority Valve – No General Services
   1600 psi – Priority valve redirects to General Services
   2200 psi – No Flap/ Just Brakes
   1660 +/-110 – HYD 1 Light     [printed value overwritten by hand; reading uncertain [?]]
   725 +/- 50 – HYD 1 Light Out
  HYD 2 Numbers:
   3000 psi at 6 gpm – EDP Out
   1100 +/- 50 psi - FC Accum Nitrogen Press
   1500 psi – RAT Deploys, Deployed by EPA
   1800 psi – HYD 2 Reset Allowed by EPA
   1660 +/- 110 psi – HYD 2 Light
   2000 psi– HYD 2 Light Out
   2500-3000 psi – Normal RAT Output
   700 psi – RAT Retract (? Airloads)
   7300 rpm – RAT Governor Maintains
   42% ↓ - Bypass Effective
   45% ↑ - Bypass Accepts Reset   [hw: RESET HYD 2]
  Brake/ Flap Accum allows for Flap Emerg Ext and 10 Brake applications
  HYD Fail Warning – HYD 1 < 600 +/- 50, HYD 2 < 1660 +/- 110, Emerg Sys < 600 +/- 50
  ```
  [hw: "EPA – EMERGENCY PACKAGE ASSEMBLY"]. A hydraulic block-diagram figure follows ("Figure 5: T-45C HYDRAULIC SYSTEM BLOCK DIAGRAM").
- p.40 (Hydraulic Systems, NATOPS 2.5), EP-relevant lines: "2500-3000 psi normal RAT operating range / 2200 psi pressure reserved by wheel brake/emergency flap accumulator if HYD 1 loses pressure / 2000 psi pressure at which HYD 2 PRESS caution light extinguishes / 1800 psi pressure required to close hyd 2 bypass valve and retract RAT if deployed / 1660 +/- 110psi pressure at which HYD 2 PRESS caution light illuminates / 1500 +/- 100psi pressure at which RAT deploys / 1600 psi pressure at which priority valve in PSP reopens to provide power for general services / 1500 psi pressure at which proirity valve in PSP closes to isolate flight controls from general services / 1300 psi required nitrogen preload pressure for wheel brake/emergency flap accumulator / ____[?] psi pressure at which HYD 1 PRESS caution light extinguishes / 700 psi pressure at RAT retracts as HYD 2 pressure is lost (aerodynamic load permitting) / 1660 [hw; printed '600 +/- 50psi' struck] pressure at which HYD 1 PRESS caution light illuminates / 45% N2 rpm required to use HYD 2 Reset button / 10x number of full brake applications provided by brake/emergency flap accumulator / three requirments for HYD FAIL warning light 1. HYD 1 pressure below 600 +/- 50psi [?] 2. HYD 2 press below 1660 +/- 110psi, and 3. Emergency system pressure less than 600 +/- 50psi"
- p.33: "1660 ± 110psi [hw; printed '600 +/- 50psi' struck] pressure at which HYD 1 (prior to AFC244) PRESS caution light illuminates / 45% N2 rpm required to use HYD 2 Reset button / 10 number of full brake applications provided by brake/emergency flap accumulator / 2800psi[?] Max pressure provided by Hand-pump / 600 +/-100psi Press that HYD FAIL illuminates if RAT pressure drops below"
- p.49 Q&A: "26. When does the HYD 2 Caution LT illuminate? When does it extinguish? HYD 2 EDP below 1660 +/-110 / HYD 2 EDP above 2000 / 27. When does the RAT deploy? HYD 2 EDP below 1500 / 28. When does the HYD 1 Caution LT illuminate? HYD 1 EDP below 1660 +/-110 / … 30. When can the RAT be reset? How will you know it reset? 1800 psi HYD 2 EDP pressure / HYD 2 Caution LT will extinguish at 2000 psi HYD 2 EDP pressure / 31. T/F The Wheel brake/ Emergency Flap Accumulator allows for 10 wheel brake applications and Flap/Slat extension in the event of HYD 1 / False. Allows for 10 wheel brake applications and Flap extension only (no Slats) / 32. At what pressure will the Wheel Brake/Emergency Flap accumulator shutoff access to the flaps? 2200psi / 33. How and when is the HYD 2 bypass valve closed after engine start? HYD 2 RESET button once engine is above 45% N2"
- p.54 Q&A: "131. HYD 1 light on below ___. Resets at ___. 1660 +/-110. 2000. / 132. What pressure is required to reset HYD 2? 1800 psi / 133. What is the Nitrogen preload of the Emer Brake/Flap sys? 1300 +/-50 / 134. If Brake Accum drops below 2200 psi, what happens? Emergency Flap accuation is removed to isolate Emer Brake / 135. Brake Accumulator gauge is reading what? Nitrogen pressure / 136. Flight control accumulators have precharge of what? 1100 +/-50 psi nitrogen"
- p.41: "T/F assuming sufficient pressure is available, use of emergency flap extension will drive flaps to full down regardless of flap lever (TRUE) / T/F if the brake pressure valve indicates 2200psi or less, activating the emergency flap lever will have no effect (TRUE) / T/F if HYD 1 fails while slats are fully extended, air flow pressure will drive them to the retract position as hydraulic pressure bleeds down (FALSE)"
- p.3: "-Emergency brake/flap accumulator gauge shows nitrogen pressure", "-know what the hyd gauges in the cockpit should read in start (1=3000, 2=0, brake=3000)", "~accumulator preload charges (Hyd flight control = 1100 +/-50, 1300 +/-50 for brake)"

---

## 10. Electrical emergencies

### 10.1 Generator failure / GENERATOR warning light
- p.70–71 (EP 11X, low-quality print):
  ```
  15. GENERATOR FAILURE
      • Confirm Engine Operation
      • GEN switch – RESET
      • VOLTMETER – CHECK
      If Generator resets and voltage is abnormal or generator does not reset
      • BATT switches – CHECK ON
      • GEN switch – OFF
      • Unnecessary electrical equip. – SECURE
      • Proceed to VMC
      • Land as soon as PRACTICAL
      If MFD's required
      • DISPLAY POWER – ORIDE
      • DISPLAY POWER – Normal, when MFD's no longer needed
      [If generator resets and voltage is normal]   ← top line cut off at the top of p.71
      • Continue Normal Operations
  16. What is the first thing you do when you get a GENERATOR Warning Light?
      • Confirm Engine Operation
  ```
- p.75 (EP 11X, clean print):
  ```
  15. Know Generator Failure procedures
      a. Confirm engine operation
      b. GEN switch – Reset
      c. Voltmeter – Check
      If generator resets and voltage is abnormal or generator does not reset
      d. Battery Switches – Check On
      e. Generator Switch – Off
      f. Unnecessary electrical equipment – Secure
      g. Proceed to VMC
      h. Land as soon as practical
      If MFD's are required –
      i. Display Power Switch – ORIDE
      j. Display Power Switch – Norm when MFD's no longer needed
      If Generator resets and voltage is normal –
      k. Continue normal operations
  ```
  [hw margin: "NC", "READ notecard"]
- "30. Gen failure- confirm engine operation, reset Gen switch" [p.8]
- "✱ GEN FAILURE – ✓ ENGINE RUNNING, Don't hold Reset in Reset only[?] Momentarily" [p.67, hw]
- "28. Generator failure" [p.66] (topic only)
- "~Generator failure = loss of hud, right mfd, gen warn light, master caution" [p.3]
- "-display switch to ORIDE to keep L MFD on during a gen failure" [p.4]; "-WILL have tacan with generator failure" [p.4]
- "58. If Overvoltage or Gen Fail, what happens? Gen Bus – Off / Non-essential AC Buses – Off / Generator Warning Light / Master Caution / FPRESS – On (after 30 sec) / CAUG – On (CWS tone also) / RT MFD – Out / LT MFD – Reverts to ADI. Out after 2 minutes unless switch ORIDE / 59. If Undervoltage, what happens? Generator Warning Light / Master Caution" [p.51]
- "16. What are the indications of an overvoltage condition? Undervoltage? OVERVOLT: GEN Warning LT, ~~[struck]~~, CAUG Caution LT, RMFD disabled, FPRES Caution LT (>30 sec), HUD fail. UNDERVOLT: GEN WARNING, ~~[struck]~~" [p.47]
- "Illumination of GEN light with undervoltage OR overvoltage." [p.51, hw]
- "72. What should I expect if I see a Master Caution light, tone, loss of RT MFD and HUD? Generator Failure" [p.52]
- "13) INDICATIONS: Master Alert, caution tone, ~~AC INV caution light~~, 20V on voltmeter. What has malfuntioned? Undervoltage sensing unit." [p.31]
- "162. With GEN FAIL, will ALL flight controls and sub-systems work? Yes. Only lose ail/rud/stby stab trim, trim indicators, HUD, RT [MFD]" [p.55]
- "85. CAUG light with a Generator Failure, I lose what? ARI, SBI, Yaw Dampening, Rudder Trim (ALL FOUR)" [p.52]
- "GEN Failure – only trim left is primary stabilator" [p.52, hw]; "Run away trim w/ Gen Fail still means primary trim will work; standby will not." [p.31, hw]
- "13. With a generator failure, batteries will give ___ minutes of power." [p.47; answer blank in the scan]; "62. How much time is available on Battery power alone? 27 minutes on two good batts / 12 minutes on one good batt" [p.51]
- "153. T/F GINA is operational upon loss of generator. True" [p.55]; "T/F The turn indicator on the ADI will be available in the event of a GEN failure (FALSE)" [p.45]
- "T/F because the standby stabilator trim is powered by the 28 VDC gen bus, in the event of a generator failure, activating the standby trim system will have no effect on the main stabilator trim (FALSE, raising the guard cover over the standby trim switch disengages the main trim motor regardless of the 28 VDC generator bus status)" [p.41]
- "-The over voltage unit takes the generator offline at 30.2 volts" and "-300 amp fuse between generator and gen bus" [p.3]

### 10.2 Total electrical failure
- p.68 (EP 11X, low-quality print):
  ```
  2. TOTAL ELECT. FAILURE procedures:
     • Emergency oxygen actuator – PULL
     • Proceed to VMC as soon as POSSIBLE
     • Land as soon as PRACTICAL
     • Attempt to reset generator / check Batt Switches ON
     • Landing Gear – EMER. EXTEND
     • Plan a NO FLAP / SLAT approach and arrested landing, if available.
       Recommend a short field arrestment due to no NWS
  ```
- p.74 (EP 11X, clean print):
  ```
  2. Know Total Electrical Procedures – NO LOAD SHEDDING NECESSARY!
     (you can eliminate three of the four answers because they include load shedding)
     a. Emergency Oxygen Actuator – Pull
     b. Proceed to VMC as soon as possible
     c. Land as soon as practical
     d. Attempt to reset Generator/Check Batteries on
     e. Landing gear – Emergency Extend
     f. Plan a NO FLAP/NO SLAT approach and arrested landing, if
        available. Recommend a short field trap due to no NWS
  ```
  [hw margin: "Read NC"]
- "2. Total electrical failure procedures (you don't have to do load shedding because it's a total failure." [p.64]
- "23. Total Electrical failure can't restore power- No flap approach and make an arrested landing" [p.7]
- "26. Electrical failure- no load shedding (eliminates 3 out 4 answers)" [p.7]
- "28. Load Shedding is not a factor with TOTAL ELECTRICAL FAILURE [hw: RTFQ]" [p.71]
- "✱ LOAD SHEDDING – NO FACTOR WITH TOTAL ELECTRICAL FAILURE" [p.67, hw]; "✱ KNOW ELECTRICAL FAILURE VERBATIUM" [p.67, hw]
- "ELECTRICAL FAILURE – KNOW WHAT ALSO NOT AVAILABLE "FLAPS/EMERG" NO" [p.65, hw]
- "-no emergency flaps with total electrical failure" [p.3]; "-No NWS with emergency gear extension" [p.3]; "EMERG GEAR HANDLE → DISABLES NWS" [p.69, hw]
- "52. T/F With a complete electrical failure, Landing Gear and Flaps may be extended manually. False. Only the gear may be extended manually." [p.51]
- "163. T/F Approach Idle function engages with total electrical failure. True. Normally held open magnetically." [p.55]
- "T/F in the event of complete electrical power loss, air conditioning and pressurization will remain on (TRUE, the PRSOV IPRSOV valves deenergize to the open position)" [p.44]
- "9 min[?] standby gyro provides valid attitude data for minimum of __ after power loss" [p.45; OCR garbled ("9 min 2 1/4'"), value uncertain [?]]

### 10.3 Electrical fire
- "3. Electrical fire immediate action- GEN switch off" [p.7]

### 10.4 AC inverter failure / bus failures
- "32. AC INV light- reset number 1 and 2 inverters" [p.8]
- "-single AC inverter failure = loss of ac non essential services, AC inv light, tone" [p.3]; "-loss of both inverters = loss of AC services, light, tone (all the above I think)" [p.3]
- "20. What is lost with a single inverter failure? (p2-15) AC INV caution, tone, ~~[struck text, illegible]~~ and you lose NON-Essential AC services." [p.31]; "14) Dual inverter failure, you will lose?— all AC services." [p.31]
- "Loss of one inverter will light AC INV caution light and loss of AC non-ess." [p.49, hw]
- "54. T/F A single AC Inverter failure will result in AC INV Caution LT. True." [p.51]
- "64. What happens if lose one inverter? ACINV caution light and lose non-essential AC busses / 65. What happens if lose two inverters? ACINV caution light and lose all AC pwr / 66. How is AC power reset for input faults? Output faults? Input faults is auto-reset. Output faults requires manual reset (cycle) / 67. With one Inverter failed, what means of navigation do I have? TACAN azimuth. / 68. With two Inverters failed, what means of navigation do I have? PAR approaches only. / 69. What are the vital services lost when non-essential AC busses lost? VOR/ILS/MB and RADALT" [p.52]
- "1 INV FAILURE → VOR ILS MB RADALT (LOST) / DUAL FAIL → TCN ~~[struck]~~ AZIMUTH (LOST)" [p.69, hw]
- "35. 28 VDC gen bus failure will not remove- primary stabilator trim" [p.8]
- "25. Failure of the 28VDC Generator Bus = Loss of all trim except Primary Stab Trim." [p.76]
- "1. With GEN functioning normally, which light(s) on CWS panel would illum if the undervoltage sensing unit failed? NONE" [p.31]

---

## 11. ECS / oxygen / cockpit environment

### 11.1 CABIN ALT warning light / pressurization failure
- p.68 (EP 11X, low-quality print; the item 1 heading is cut off at the top of the scan):
  ```
  [1. CABIN ALT Warning Light Procedures]
     • OBOGS – on and mask TIGHT
     • Reduce AOA (if required)
     • AIR FLOW Knob – OFF, then ON
     If Warning Light remains on –
     • Altitude – DESCEND BELOW 25,000' MSL
     • Land as soon as PRACTICAL
  ```
  [hw: "CABIN PRESSURE OR A/C FAILURE ↳ DOESN'T MEAN YOU LOOSE O2"]
- p.74 (EP 11X, clean print):
  ```
  1. Know Cabin Altitude Warning Light procedures
     a. OBOGS – on and mask tight
     b. Reduce AOA (if req)
     c. AIR FLOW KNOB – off then on
     If Warning Light remains on –
     d. Altitude – Descend Below 25,000' MSL
     e. Land as soon as practical
  ```
- p.64 #1 "Know cabin alt. warning light procedures." [hw: "① OBOGS – ON & MASK TIGHT ② REDUCE AOA – ③ AIRFLOW KNOB – OFF THEN ON → IF WARN LT REMAINS ON – ④ ALT – DESCEND BELOW 25,000' MSL"]
- "19. Cabin Alt. Light: descend below 25K" [p.66]; "34. CABIN ALT light: OBOGS_on, mask tight, AOA_reduce, airflow_off" [p.66]
- "10. CABIN ALT LIGHT: descend below 25K (BECAUSE YOU DON'T LOOSE O2)" [p.70; parenthetical is hw]
- "17. Cabin pressurization failure- descend below 25K MSL" [p.7]
- "✱ CABIN ALT (Pressurization failure) Descend Below 25,000' MSL" with boxed note "CABIN ALT CAUTI[ON] OBOGS ON MASK TIGHT" [p.67, hw]
- "105. What does CABIN ALT Light mean? [Cab]in Altitude exceeded 24,500 +/-500 or Overpress/Overheat of [Cabin] Air Unit (CAU) of 500 degree on compressor outlet or 250 [?]…" [p.53; left edge and end garbled]; "CABIN ALT WARN LIGHT – Pg 17-19" [p.53, hw]
- "24500 +/-500' cabin alt above which CABIN ALT warning light will illuminate" [p.44]; "Conditions that will cause CABIN ALT warning light to illuminate 1. Air conditioning failure causes overpressure to the CAU compressor 2. The CAU compressor outlet temperature rises above 500°f, 3. The CAU turbine inlet temperature rises above 250°f cabin pressure failure only when cabin altitude is above ___" [p.44]

### 11.2 OBOGS failure / OXYGEN warning light
- "1. Descend below 10,000 feet cabin alt. with an OBOGS Failure" [p.7]
- "8. OXYGEN warning light, system won't reset set OBOGS/ANTI-G switch off" [p.7]
- "7. OBOGS Contamination (OXYGEN Warning Light): descend to less than 10,000 CABIN ALT or Minimum Safe Altitude" [p.68]
- "19. OBOGS contamination (Oxygen Warning Light) = Descent to below 10,000 CABIN altitude or Minimum Safe Altitude." [p.75]
- "14. OBOGS Failure – If it won't reset, leave OBOGS OFF." [p.75]
- "26. OBOGS failure: if it won't reset, leave OBOGS_OFF. Use the green apple – you don't want bad O2 from OBOGS contaminating good emergency O2." [p.66]
- "14. OBOGS FAILURE – if it won't reset, leave OBOGS – OFF. Use the green apple, you don't want bad O2 from OBOGS contamination good emergency O2" [p.70]
- "✱ OBOGS – Descend below 10,000 MSL" [p.67, hw]
- "106. What does OXYGEN light mean? OXYGEN switch off, O2 concentration below 95%, exceeds 250 degrees at temp switch." [p.53]
- "OXYGEN Light – OBOGS still works just below 95% oxygen" [p.51, hw]
- "250°f temperature at which overheat temperature sensor illuminates OXYGEN Warning light" and "9500' MSL altitude above which a low oxygen concentration will cause OBOGS to shutdown" [p.44]
- "three situations that will cause OBOGS automatic shutoff 1. A system malfunction 2. Low oxygen concentration and altitude over 9500' and, 3. Bleed air temp above 250°f or 4. Whenever the OBOGS/ANTI-G switch is off" [p.45]
- Emergency oxygen: "1800-2500 psi acceptable pressure range for emergency oxygen bottle" / "4-20 min approximate duration that emergency oxygen supply provides in minutes" / "T/F Once started, the emergency oxygen supply cannot be shutoff and restarted (FALSE)" [p.45]

### 11.3 Smoke or fumes
- p.70 (EP 11X, low-quality print):
  ```
  12. SMOKE OR FUMES FROM COCKPIT
      • Altitude – Descend Below 25,000' (if practical)   [hw: "YOU MAKE THE CALL"]
      • AIR FLOW knob – OFF
      If unable to clear smoke or unable to see –
      • Airspeed – REDUCE
      • Warn other cockpit occupant / secure loose items
      • Seat – LOWER
      • Visor – DOWN
      • MDC firing handle – PUL[L]
      • Land as soon as POSSIBLE   (circled)
  ```
- p.75 (EP 11X, clean print):
  ```
  13. Know Smoke/Fumes Elimination Procedure
      a. Altitude – Descend below 25,000' (if practical)
      b. Air Flow Know – Off
      If unable to clear smoke or unable to see –
      c. Airspeed – Reduce
      d. Warn other cockpit / Secure loose items
      e. Seat – Lower
      f. Visor – Down
      g. MDC Firing Handle – Pull
      h. Land as soon as possible
  ```
- p.66 #24 "Know smoke/fumes procedure" [hw: "① ALT – DESC. < 25,000' (IF PRACTICAL) ② AIRFLOW KNOB – OFF – IF UNABLE TO CLEAR SMOKE – ③ A/S REDUCE ④ WARN OCCUPANT/SECURE ITEMS ⑤ SEAT ↓ ⑥ VISOR[?] ↓ ⑦ MDC – PULL ⑧ LAND AS[AP][?] POSSIBLE"]
- "5. Smoke and fumes in cockpit- Altitude descend below 25K, AIR FLOW knob off" [p.7]

### 11.4 Canopy loss / CANOPY light
- "6. CANOPY LOSS: descend to 10,000" [p.68]
- "15. Canopy loss: descend to 10K or min. safe alt." [p.64]
- "8. Canopy Loss = Descend to 10k or min safe altitude and Less than 200 KIAS." [p.74]
- "21. CANOPY light in flight- Airspeed below 200 knots" [p.7]
- "-CANOPY light whenever canopy unlocked....get a tone of unlocked and go past 95% rpm." [p.4]
- "109. What does CANOPY light mean? Canopy latch is not in the latched and locked position. / 110. When do you get the CANOPY light and MASTER CAUTION light? With the canopy unsafe and the power set to above 95%" [p.53]; "95% rpm above which caution tone sounds with CANOPY caution light illuminated" [p.44]
- "AV HOT LIGHT – >67°C ONLY ON GROUND" [p.53, hw]; "102. What does AV HOT mean? ECS cool temp exceeds 67 deg C. Must cool before takeoff" [p.53]

---

## 12. Flight-control malfunctions

### 12.1 SLATS caution light / split flaps or slats / asymmetric
- "7. Uncommanded roll or yaw when transitioning flaps/stats- return flaps to previous position" [p.7]
- "-rapid roll during flap/slat transition = split flap/slap" [p.4]
- "4. (2 questions) If put you get a SLATS caution light- maintain a/s less than 200 KIAS" [p.7]
- "5. Coming in for the break and you get slats light, slow to and maintain below 200 KIAS." [p.64]
- "4. If you are coming into the break and you get a slats light, slow to and maintain below 200 KIAS." [p.74]
- "28. For a SLATS caution light always maintain below 200 KIAS and land as soon as PRACTICAL (i.e. for a missed approach)." [p.76]
- "29. SLAT Light – A Caution light that will illuminate if SLATS not in proper position, extended above 217 knots, or split, [hw: (SLATS EXTENDED & ACCELERATED THRU 217)] / 30. Coming in for the break and you get the SLATS light, slow to and maintain below 200 KIAS" [p.71]
- "✱ KNOW SLAT light positions" [p.67, hw]
- "-Indications of split slat condition will be uncommanded roll and illuminated SLAT caution light / -Flap position light may not show split flap condition because light is connected to left flap only" [p.35]
- "The SLATS caution light is illuminated if 1. Slats not in selected position, 2. Split slats, 3. Slats selected above 217 knots 4. Stats extnded then accelerate past[?] 217" [p.42]
- "38. When does SLATS Caution LT illuminate? Slats not in selected position / Split Slats / Slats extended and airspeed increases above 217 kts / Slats selected above 217 kts (slats won't extend)" [p.49]
- "80. What does the SLAT Caution light indicate? Slat are not in commanded position or are unsymmetric" [p.52]

### 12.2 CAUG (Control Augmentation) caution light
- "15. C AUG light on lose- ARI, SBI, yaw dampner, and rudder trim" [p.7]
- "-If CAUG light illuminates in flight, lose ARI, SBI, rudder trim, yaw dampener" [p.4]
- "32. Know the 4 things you lose with C AUG caution light: yaw damper, SBI, ARI, rudder trim." [p.66]
- "18. Know the 4 things you will lose with a C AUG caution light – a. Yaw Dampener b. SBI c. ARI d. Rudder Trim" [p.75]
- p.71: "19. What have you lost when you get a C AUG Caution Light? • Yaw Damper • SBI [hw: → STAB[?] REPOSITION] • ARI [hw: → DUTCH ROLL CORR] • Rudder Trim [hw: (Auto <217 KIAS)]"
- "✱ CAUG Caution Light Lose – ARI, SBI, YAW AUG, RUDDER TRIM" [p.67, hw]
- "[C]AUG Illum – FAILURE, BIT TEST, PADDLE OFF" [p.61, hw; same line repeated on p.63]
- "24. C AUG BIT – for it to work, the FLAPS must be UP, and less than 80 Knots, WOW [?]" [p.71; "WOW" is hw]
- "84. If I get a CAUG caution light, what do I lose? ARI (217 kts, Flaps half or full), SBI, Rudder Trim, Yaw Dampening (<217kts) / 85. CAUG light with a Generator Failure, I lose what? ARI, SBI, Yaw Dampening, Rudder Trim (ALL FOUR) / 86. CAUG Bit can only be conducted when? <80kts, WoW, Flaps up" [p.52]
- "Conditions for CONTR AUG caution light illuminates when 1. CONTR AUG system degraded, 2. BIT test in progress, 3. Paddle switch has been depressed" and "The CONTR AUG BIT requires 1. Weight on wheels, 2. Less than 80 knots airspeed, 3. FLAPS/SLATS up" [p.41]
- "143. To reset NWS and CAUG, you must do what? NWS: depress the NWS button / CAUG: momentary select to CAUG reset" [p.55]

### 12.3 Trim failure
- "3. Trim Failure question – answer will say ADI indicates 2 deg. Nose up" [p.68]
- "3. Trim failure question: answer ADI indicates 2 deg. nose up." [p.64]
- "27. A 2 degree pitch during extension or retraction of the boards is normal with the SBI" [p.71]
- "✱ 2° ADI PITCH DURING ext or retraction of BOARDS NORMAL w/ SBI" [p.67, hw]
- "20. SBI does not change stick position" [p.71]
- Stab trim on generator / 28 VDC bus failure: see §10.1 and §10.4.

### 12.4 Speed brakes
- "21. Speed Brakes may not fully extend ABOVE 340 KIAS / 22. Speed Brake Blowback will occur ABOVE 380 KIAS / 23. The slower you go, the more control you have" [p.71]
- "S/B BLOW BACK CAN OCCUR @ 380, may not extend all the way 340." [p.67, hw]

---

## 13. Landing gear, hook, brakes, anti-skid, NWS

### 13.1 Gear handle light / WHEELS warning light / emergency gear
- "18. For the question about the gear not being down, the answer is: Warning Light in the handle" [p.71]
- "31. Question about gear not being down. Answer: warning light in the handle" [p.66]
- "17. If the landing gear handle is down and you only have two gear down and locked then you will get a light in the gear handle." [p.75]
- "23. Gear Handle Light will illuminate any time the gear is in transit or any time the gear is not in the commanded position (or the gear doors are not up when the gear is up and locked)." [p.76]
- "25. Gear Handle Light – will illuminate when the gear is in transit or any time the Gear is not in the commanded position" [p.71]
- [hw, bottom of p.74]: "• WHEELS WARNING Lt. <150[?] KIAS <85%[?], ↓7200 MSL • FLAPS ↓"
- "Conditions for WHEELS warning light illumination 1. LDG gear handle is not set to DOWN position, 2. N2 rpm below 95% and either, - 3a. altitude is less than 7200' msl with airspeed below 170 knots, OR 3b. SLATS/FLAPS lever not in up position." [p.42]
- "T/F when lowering the gear with the EMER GEAR handle, all of the gear doors remain open (FALSE, 28 VDC services bus powers the emergency nose landing gear door actuator bringing the nose gear doors to a near closed position.)" [p.42]
- "EMERG GEAR HANDLE → DISABLES NWS" [p.69, hw]; "-No NWS with emergency gear extension" [p.3]

### 13.2 HOOK warning light
- "33. Hook light still illum after hook should be down- hook is not fully extended" [p.8]
- "30. Hook light means hook not down with handle down" [p.66]
- "16. Hook Warning Light means hook is not down with handle down." [p.75]
- "17. HOOK light means that the hook ~~is NOT down with Handle DOWN~~ [hw: Does not agree w/ handle]" [p.71]
- "the HOOK warning light is illuminated when HOOK handle does not correspond to hook position" and "300 knots airspeed above which HOOK warning light may illuminate due to airloads" [p.44]
- "-hook extended by gravity assisted by snubber" [p.3]

### 13.3 Wheel brake failure / anti-skid failure
- p.68 (EP 11X, low-quality print):
  ```
  5. WHEEL BRAKE FAILURE ON TOUCHDOWN:
     • Go around, if able
     If go around not feasible-
     • Wheel brakes – release
     • ANTI-SKID – OFF
     • Attempt braking
     • Hook – DOWN (1,000' prior to gear)
     • Throttle – OFF   [hw: (if departing Rwy)]
     If airborne -
     • ANTI-SKID – OFF
     • Attempt a short field arrestment
  ```
- "7. Wheel Brake Failure on Touchdown = GO AROUND! If unable, then feet off brakes, anti-skid off, attempt braking." [p.74]
- "14. Wheel brake failure on touchdown: go around! If unable to go around: feet off brakes, ANTI SKID_off, reattempt braking" [p.64]
- "31. Wheel brake failure go around not possible- brakes release, anti skid- off, attempt braking, hook down 1000 feet prior" [p.8]
- "34. Anti-skid failure- release brakes, anti-skid off, brakes as required" [p.8]
- "29. Anti-Skid Failure = Brakes Release, Anti-Skid Off, Attempt Braking." [p.76]
- Faint hw topic list [p.69]: "BRAKE FAILURE – ASHORE[?] / BRAKE FAILURE – AFLOAT[?]"
- "-5 x to turn off anti skid switch (after hyd 1 loss, after shurdown prior to setting pk bk, boat, skid caution light, blown tire)" [p.3]
- "-Five times to secure anti-skid switch: after HYD 1 failure (loss of general services hydraulics), after engine shutdown before setting parking brake, carrier landings, anti skid caution light illuminated, blown tire" [p.35]
- "139. ANTI-SKID off, carrier landing, and HYD 1 fail: Blow tire, parked, light ON (caution) (5)" [p.54]
- "Anti-SKID switches: ONE OFF then the system is off" [p.49, hw]
- "the ANTI-SKID caution light is illuminated if 1. System malfunction is detected, 2. Prolonged full pressure dump lasting greater then 2 seconds, 3. No wheel spin detected 3 seconds after weight on wheels (reverts to normal braking)" [p.43]
- "The PARKING BRAKE caution light is illuminated if the throttle is advanced beyond intermediate position (60-70%) and the parking brake is engaged." [p.43]; "PK BRAKE CAUTION LIGHT – ON IF SET AND N2 ABV 70% RPM." [p.52, hw]
- "145. BRAKE PRESS light comes on when? LBAR not retracted, PBRAKE not set, over 95%. Etc. (know all)" [p.55]

### 13.4 Nosewheel steering failure / NWS AUG
- "5. Taxi clear of active, NWS malfunction- aircraft would be steered by differential braking" [p.5]
- "10. If you lose nosewheel steering, use differential braking to control aircraft." [p.59]
- "✱ NO NWS – USE DIFFERENTIAL BRAKING" [p.65, hw]; "Differential brakes – loose NWS" [p.61, hw]
- "25. If NWS AUG goes on during taxi, you should: Momentarily press NWS button." [p.6]
- "19. NWS AUG system provides yaw rate feedback in high gain nose wheel steering – false (yeah we had no f'ng idea either)" [p.5]
- "NWS AUG FAILURE → TD JUST BEFORE (50') ARRESTING GEAR" [p.72, hw]
- "-Know what triggers a NWS caution light" [p.3]
- "-NWS caution light indicates malfunction within and subsequent shutdown of NWS system or NWS disconnected with paddle switch" [p.35]
- "The NOSE WHEEL STR caution light is illuminated if 1. Nose wheel moves away from commanded pedal position, 2. If there is an internal system failure (including HYD 1 failure), 3. When the system has been paddled off." [p.42–43]
- "-Paddle switch deselects both NWS and CONRT AUG on the Ground. When airborne deselects CONTR AUG at all times and NWS as long as the gear is down" [p.35]

---

## 14. Landing emergencies

### 14.1 Blown tire(s)
- On takeoff:
  - p.70 (EP 11X): "11. BLOWN TIRE ON T/O: If aborting [hw: ABORT] – • Rudder – as required to counter swerve • ANTI-SKID switch – OFF PRIOR TO BRAKING / If taking off – • Rudder – as required to counter swerve • Gear and Flaps – DO NOT REPOSITION • Eng. Instruments – MONITOR • Execute Landing w/ Blown Tire procedure"
  - "21. Blown Tire on T/O or Landing / a. Rudder – As required to counter the swerve / b. Anti-skid Switch – Off prior to braking" [p.76]
  - "19. Blown tire on T/O roll and abort- rudder (counter swerve), Anti-skid off" [p.7]
  - "21. Blown Tire on Takeoff = Rudder as req to counter swerve and anti-skid off prior to braking." [p.60]
  - "23. Blown tire on t/o: rudder_as req'd to counter swerve, ANTI-SKID_off prior to braking" [p.66]
  - "6. If aborting with a blown tire, set ANTI-SKID switch ON – (False)" [p.5]
  - "9. For blown tire… turn anti-skid off." [p.59]
  - "✱ BLOWN TIRE – ANTI-SKID OFF (ON T/O or LANDING)" [p.65, hw]; "Blown Tire – Anti-Skid OFF" [p.61, hw]
  - "~~(D) FOR A BLOWN TIRE, [?] PRIOR TO BRAKING YOU SHOULD: TURN ANTISKID OFF~~" [p.62, hw; scribbled through in the source]
- After touchdown: "9. Blown tire after touchdown- Rudder (counter swerve) and Go around if able" [p.7]
- Single blown tire, landing:
  - "20. Blown tire, no arresting gear- flared, half flap" [p.7]
  - "22. For a single blown tire on landing = Flare the landing with ½ flaps." [p.76]
  - "31. For a Landing with a SINGLE BLOWN TIRE and no available arresting gear: Perform a flared landing, FLAPS ½" [p.73]
  - "✱ BLOWN TIRE single – NO ARRESTING gear, RUNOUT OPTION, FLARED LANDING, ½ Fla[ps]" [p.67, hw]
- Dual blown tires:
  - "32. For a Landing with DUAL BLOWN TIRES, and no available arresting gear: Consider gear UP landing, or a controlled ejection" [p.73]
  - "13. For a DUAL BLOWN TIRE LANDING – FLARE the Landing [hw: (for a trap.) (Consider gear up or controlled Ejection)]" [p.70]
  - "25. Dual blown tire landing: (pretend you're an Airfarce weenie and) FLARE the landing" [p.66; middle of the line is hw]
  - "✱ DUAL BLOWN TIRES – Gear up or eject if Arresting gear N/A" [p.67, hw]
- Faint hw topic list [p.69]: "BLOWN TIRE ON TAKEOFF / BLOWN TIRE DURING CAT LAUNCH / LANDING W/ BLOWN TIRE(S) / [illegible line] / BRAKE FAILURE – ASHORE[?] / BRAKE FAILURE – AFLOAT[?]"

### 14.2 Directional control / short-field & long-field arrestment
- "6. With directional control in question, short field arrestment: hook down, land 50 ft prior" [p.7]
- "4. Directional control in question: arrestment is 50 ft. prior to the gear." [p.64]
- "3. If Directional Control is ever an issue, then take a short field arrestment and land 50' prior to the gear with your hook down." [p.74]
- p.73: "33. SHORT FIELD ARRESTMENT – if directional control NOT in question: Touch down 500' prior to gear / IF directional control IS in question: Touch down at or 50' prior to gear"
- "✱ SHORT FIELD ARRESTING GEAR – 500 – ~~1000~~ PRIOR" [p.67, hw]
- "[SHORT FIELD ARREST…]" [p.72, hw; top of the page cut off]
- p.71: "26. LONG FIELD ARRESTMENT procedure (for test only) • Hook – DOWN (1,000' prior) • Maintain Directional control • Release brakes as you cross the cable"
- "SHORT FIELD & LONG FIELD ARRESTMENTS" [p.67, hw]
- Total electrical failure → "Recommend a short field arrestment due to no NWS" (§10.2)

### 14.3 Ditching
- "8. Configuration for ditching = gear up flaps down full." [p.59]
- "✱ DITCHING – GEAR ↑, FLAPS ↓" [p.65, hw]; "Ditch – G↑, F↓" [p.61, hw; one word scribbled out]
- Engine failure off the cat, unable to eject → "ditch straight ahead" (§5)

### 14.4 Flameout approach
- "If unable to eject – h. Prepare for Flameout Approach" (Engine Fire in Flight, p.76, §7). The gouge has no other flameout-approach content.

### 14.5 Emergency-flap configuration (aero)
- "13) Compared to normal approach, the T-45 Emergency Flap configuration has same approach A/S and faster stall A/S..." [p.1; the line ends with "..." in the source]

---

## 15. Instrument / avionics failures

- MFD failure:
  - "11. Abnormal MFD- blinking screen, invalid display, blank screen, stuck push button" [p.7]
  - "4. MFD FAILURE: Indicated by • blank screen • blinking screen • stuck button • multiple anomalies" [p.68; heading cut off in the scan]
  - "6. MFD Failures = Blinking Screen, Stuck Button, Black Screen, Wrong Info." [p.74]
  - "11. MFD FAIL: blinking screen, stuck push button, ?" [p.64]
  - "[BL]ANK, BLINKING, STUCK PUSHBUTTON – MALFUNCTIONS / [IN]DIVIDUAL BUTTON FOR 1 display – Display power reset for all sys" [p.61, hw; repeated on p.63]
  - "22. Multiple MFDs f'd up- momentarily set Display Power switch to RESET" [p.7]; "27. For a Multiple MFD Failure – Display Power Switch to Reset." [p.76]; "36. Multiple MFD failure – display power reset" [p.73, hw]
  - "10. What is the solution to one MFD experiencing a display problem? Multiple MFDs with the same problem? Turn off the MFD / Display Power switch momentarily to reset (cycles power to DEU)" [p.47]
  - "7. MFD Failure indicated by: Blank or Blinking display, Stuck pushbutton" [p.30, CNI gouge]
- DEU failure:
  - "-DEU failure limits you toa GCA" [p.4]
  - "88. What navigation do you have with a DEU failure? None. Only option is the PAR" [p.52]; "146. If DEU fails, what navigation aids do I lose? What are my options? Everything. PAR or Visual" [p.55]
  - "8. MFD's and HUD are lost with DEU failure, you will be limited to PAR approaches" [p.30]
- GINA / INS failure:
  - "10. GINA failure- all the above" [p.7]
  - "Total GINA failure indications: blanking of attitude and heading info on ADI, HSI, and HUD" [p.15]
  - "T45C INS failure: Both of the above" [p.14] (follows the pitot-static and VHF-nav failure items)
  - "15. Lose GINA? Lose waypoint…" [p.86; rest garbled [?]]
- Pitot-static / barometric altimeter:
  - "27. Pitot static failure question- standby VSI" [p.8]; "16. Question about pitot static failure: answer stby vsi" [p.64]; "9. Question about Pitot Static Failure = Check STBY VSI." [p.74]; "9. Question about PITOT STATIC FAILURE: answer – STBY VSI" [p.70]
  - "Complete pitot static system failure, you lose mach and airspeed indications, barometric altitude. NOT vertical velocity" [p.14]
  - "12. With barometric altitude failure- Use radar alt if below 5K AGL, use cabin altimeter if unpressurized, and check PITOT Heat is on" [p.7]
  - "24. Barometric Altimeter Failure = Check Pitot Heat, Use RADALT if less than 5000', Use Cabin Altimeter if unpressurized." [p.76]; "32. RADALT is operative below 5,000 feet." [p.77]
- ADI / attitude / AOA:
  - "9) What would you use if your ADI (?) display failed? STBY AI (other MFD should default to ADI anyway)" [p.31]
  - "10) Which instrument would verify VSI display readout failure? STBY ALT, STBY airspeed, [STBY VSI][?]" [p.31]
  - "11) If off flag displays on the AOA indicator (front cp) you can still use the AOA indexer, NO" [p.31]
  - "ADI fails in IFR conditions- establish a reference on the stby attitude indicator" / "Nose-high UA partial panel- stby attitude and AOA indicator" / "If AOA indications fail: use airspeed indicator" [p.15]
  - "Nose-low UA partial panel, use stby airspeed and stby attitude indicator" [p.14]
- VOR/ILS / inverters: "VHF navigation system failure with VOR or ILS steering selected: VOR/ILS indications removed" [p.14]; "14. Lose VOR? VOR/ILS indications disappear[?]" [p.86]. For nav lost on inverter failure, see §10.4.
- IFF: "what malfunction has occurred if ATC reports loss of alt. info? IFF Failure" [p.32, hw]
- Stall warning: "-rudder shakers and tone and best indications of an impending stall" [p.4]

---

## 16. Miscellaneous EP exam items

- Midair:
  - "4. If you are flying form and prove that you can no longer fly form together (YOU HIT EACH OTHER), then have someone else check you out (besides the guy that you just hit)." [p.59]
  - "9. When you have a midair with your wingman, the answer is have someone else give you a visual inspection, not the guy you just bumped into." [p.64]
  - "✱ DONT HAVE WINGMAN JOIN UP – AFTER MIDAIR" [p.65, hw]
- "31. Increase altitude for better radio reception (really… it's on there)." [p.60]
- "32. Structural damage to the airframe may require you to blow the canopy." [p.60]
- "23. The slower you go, the more control you have" [p.71]
- Weather (Metro gouge; *not an EP, noted only*): "20) If caught in a microburst, add full power and wave off/abort (basically do what [name] does on 75% of his landing attempts)" [p.9]
- "REVIEW ECS" [p.69, hw]
- Unreadable boxed diagram at the bottom of p.73, numbered 1–8, with "<60KTS <80KTS" legible.

---

## 17. EP-related engine limits (from the systems gouge)

- p.37 ("T-45 Engineering/Systems Gouge – Engine Systems (NATOPS 2.1)"), EP-relevant lines:
  ```
  112.4 +/- 1% N1 rpm above which the EGT/RPM warning light illuminates
  104% Maximum N2 rpm at MRT
  104% Maximum N2 rpm for transient accelerations
  100% Maximum continuous N2 rpm
  95% N2 rpm not to be exceeded in manual fuel control in order to prevent N1 overspeed below 20,000 ft.
  90% N2 rpm not to be exceeded in manual fuel control in order to prevent N1 overspeed above 20,000 ft.
  72% approach idle, minimum rpm gear down and no weight on wheels
  15% minimum N2 rpm required for engine start
  650 +/- 8°C EGT above which the EGT/RPM warning light illuminates
  645°C maximum EGT for transient accelerations   [hw: → TIME RESTRICTED TO < 20 SEC]
  [610°C] maximum EGT at MRT   [hw: (30 MIN/HR)]
  550°C maximum EGT during ground start   [hw: (NO MORE THAN 570 FOR 10 SEC)]
  600°C maximum EGT during air start   [hw: (NO MORE THAN 650 FOR 10 SEC)]
  450°C maximum EGT at idle
  300°C firewire temperature required for FIRE warning light to illuminate
  150°C firewire temperature required for TAILPIPE HOT warning light to illuminate
  50°C maximum overshoot above 600°C during airstart (10 sec max)
  20°C maximum overshoot above 550°C during ground start (10 sec max)
  30min. minimum interval after three GTS start attempts
  3min. minimum interval between each GTS start attempt
  45sec. Time that firewire must remain below 300°C for FIRE warning light to go out
  30sec. Time ignition system remains on after GTS button release during airstart
  28sec. Maximum allowable time for GTS advisory light to illuminate while in flight   [hw: FOR AIRSTARTS]
  20sec. Maximum time for EGT to remain above 600°C during transient accelerations
  15sec. Maximum allowable time for ROTATION advisory light to illuminate   [hw: READY LIGHT]
  15sec. Maximum allowable time engine light-off after moving throttle to idle
  10sec. Maximum time for EGT to remain [above] normal limit during ground start/airstart   [hw: (FOR 20° OVERSHOOT)[?]]
  35psi pressure below which the LP PRESS caution light illuminates
  10psi oil pressure differential below which the OIL PRESS caution light illuminates
  ```
  (The MRT EGT value is handwritten over and partly illegible. "610" comes from p.34 and p.56.)
- p.56: "176. Idle limits: FF: 300-400 / EGT: 450 / RPM: 55 +/-2 (1% for every 1500') / 177. Engine Limits: FF: 6410 max / EGT: 610 max @ MRT / 550 continuous / 645 transient (20 seconds) / 600 airborne start (650 overshoot 10 seconds) / RPM: 104 max (less than 30 minutes per flight hour) / 104 transient (20 seconds max) / 100 max continuous / 55 +/-2 idle"
- "169. GEN Warning light extinguishes on start at ___, comes on at ___ on shutdown. 45% 42%" [p.56]
- "24V minimum voltage for engine start" [p.38]; "2. What is the min voltage of a fully charged batt? 24V" [p.31]
- p.34 (hw notes): "Ignition engaged until 45% RPM or 45sec / GTS light w/in 20sec on ground / GTS light w/in 28sec in flight / Ready light w/in 15sec … / Generator reset 5sec"

---

## 18. Departure / spin recovery and aero EP items

- "8) Spin recovery upright and inverted differ with – aileron position" [p.1]
- "10) -60 AOA A/S- (50-120 kts)" [p.1]
- "12) Rudder full opposite- recovery both erect and inverted spins" [p.1]
- "17) 45 degree AOA ROD spin- 15,000 fpm" [p.1]
- "28) T-45 upright spin NOT characterized by – recovery AOA increasing past 5 units" [p.2]
- "40) Inverted spin- 0 AOA, neg G., turn needle in direction of spin" [p.2]
- p.20: "43. Rudder opposite turn needle for both upright and inverted spins / 44. inverted spins characterized by- 0 AOA, neg G's, Turn needle direction of Spin / 45. Aileron positions reversed for spin recovery (upright + Inverted) upright into turn needle, Inv away from needle." (Same items repeated on p.23.)
- p.20 spin-mode table (hand-copied, OCR rough):
  ```
  Upright spin   +30   INC        180       12,000 fpm
                 +45   stdy       100-110   15,000 fpm
  INVERTED Spin  -60   50-120     15-20,000'
                 -40   100-160    15-20,000'
                 -25   140-200    11,000'
  ```
- p.25 "INVERTED SPIN MODES SUMMARY" table: TRUE AOA -60 / -40 / -25 degrees · Indicated AOA 0 · Airspeed 50-120 / 100-160 / 140-200 · Altimeter decreasing rapidly · VSI 6,000 fpm descent · Turn needle in direction of spin · Descent rate 15,000-20,000 / 15,000-20,000 / 11,000 fpm · Nose attitude ~30 / 50 / 65[?] degrees down · g's -1 to -1.4[?]. Below the table:
  ```
  Rudder Full Opposite Turn Needle for both upright and inverted spins
  Aileron Full with Turn Needle for Upright Spins
  Aileron Full Opposite Turn Needle for Inverted Spins
  ```
- Other aero-gouge copies of the same items: "Know spin recovery for upright and inverted" / "Upright and Inverted spins Rudder opposite for what type of spins?" [p.17]; "45° upright spin 15,000 ROD" [p.18, p.21]; "Airspeed 50-120 -60 inverted spin" [p.16, p.21]; "32. OCF Rudder, Lateral input control, opposite for INV and Upright. upright Aileron …[?]" [p.22]; spin rows also on p.26 and p.28.
- Stall warning: "6) Artificial stall warning …- occurs at 21.5 AOA" [p.1]; "-rudder shakers and tone and best indications of an impending stall" [p.4]
- Max abort speed: see §4.1.
- p.69 (hw): "APP AOA = 17 UNITS 160 KIAS (APPROX) / L/D MAX = 14 UNITS 180 KIAS (APROX) / CRUISE = 12 UNITS 230 KIAS (APROX)". The L/D max (best glide) figure bears on flameout planning; it is included for context.

---

## 19. Gouge vs. built-in pack: quick map

| # | eps-pack.js EP (IC 21/43, Nov 2023) | Gouge coverage (pages) | Status |
|---|---|---|---|
| 1 | Clear Engine / Abnormal Start / TP Fire on Shutdown | p.59 #11, p.62 F, p.65, p.77 #36 | Consistent |
| 2 | Emergency Shutdown / Egress | p.6, p.58, p.76 #30, p.77 #34–35 | **Differs** (D1) |
| 3 | Engine Failure | p.4, 5, 7, 38, 54, 60, 66, 74 | Consistent |
| 4 | Airstart | p.7 #14, p.58, p.65, p.67, p.73, p.76 #26, p.77 #33 | **Differs** (D2) |
| 5 | Compressor Stall / EGT-RPM Warning Light | p.5–7, 54, 59–61, 64, 65, 74 | **Differs** (D3) |
| 6 | Abort | p.5 #9, p.7 #25, p.60 #23, p.62 C | **Differs** (D4) |
| 7 | Emergency Catapult Flyaway | p.5, 8, 60, 65, 66, 67, 73, 74 | Mostly consistent (D5) |
| 8 | Brake Failure – Ashore / Skid | p.8 #31, #34, p.64, p.68 #5, p.74 #7, p.76 #29 | **Differs** (D6) |
| 9 | Brake Failure – Afloat | p.69 (topic title only) | Not covered |
| 10 | Loss of Directional Control | p.5, 6, 7, 59, 60, 65, 66, 70, 74, 76 | **Differs** (D7) |
| 11 | Asymmetric Flaps/Slats | p.4, p.7 #7, p.35 | Consistent |
| 12 | Departure/Spin Procedure | p.1, 2, 20, 25 (+ aero copies) | Partly covered (D8) |
| 13 | Total Electrical Failure | p.64, 68, 74 | Consistent first step; gouge adds steps (D9) |
| 14 | Adverse Physiological Symptoms | p.7 #1 (OBOGS failure) | **Differs**/partial (D10) |
| 15 | Rapid Decompression | p.64, 68, 74 (canopy loss); p.7, 66–68, 70, 74 (cabin alt) | **Differs** (D10, D11) |
| 16 | Electrical Fire | p.7 #3 | Consistent |
| 17 | Smoke or Fumes in Cockpit | p.7 #5, p.66 #24, p.70 #12, p.75 #13 | **Differs** (D12) |
| 18 | Fire Warning Light | p.3, 5, 8, 47, 60, 62, 65, 66, 74, 76 #31 | **Differs** in-flight (D13) |
| 19 | GTS Fire Warning Light | p.6, 7, 58, 59, 62, 65, 76 #30 | **Differs** on ground (D14) |
| 20 | Oil Press Warning Light | p.59 #5, p.61, p.64 #10 | **Differs** (D15) |
| 21 | Oxygen Warning Light | p.7 #8, p.68 #7, p.75 #19 | **Differs** (D16) |
| 22 | TP Hot Caution Light | p.5 #12, p.59 #7, p.64 #13, p.77 #34 | Mostly consistent (D17) |

## 20. Discrepancies between the gouge and `/workspace/phrase-stack-memorizer/eps-pack.js`

> The gouge was written around 2007 for older NATOPS EP exams (06X/11X). The built-in pack is IC 21/43, Nov 2023. **Treat the pack as authoritative.** These are the places where the gouge would teach a different or outdated answer.

- **D1 – Emergency Shutdown/Egress.** Pack: "1. Throttle - Off / 2. Engine switch - Off / 3. Fuel Shutoff Handle – Pull / 4. Ejection Seats – Safe / 5. Batt switches - Off".
  - Gouge p.6: "1) Throttle OFF, 2) Engine Switch-OFF (both Cockpits), 3) Fuel Shutoff – PULL, 4) BATT switches – OFF, 5) Emergency Egress". It has **no "Ejection Seats – Safe" step** and adds "Emergency Egress" as a step.
  - Gouge p.77 #34/#35 (TP Hot / Engine Fire on deck): "Throttle – Off / Fuel Shutoff Handle – Pull / Battery Switches – Off / Egress". There is **no Engine switch step** (only a handwritten "ENG Switch OFF" in the margin) and no seats step.
- **D2 – Airstart.** Pack: "1. Emergency oxygen green ring(s) - pull / 2. Throttle - off / Simultaneously *3/*4: 3. GTS Start Button – Press / 4. Throttle - Idle / If unsuccessful (no relight within 30 seconds…): 5. Throttle – off (allow 30 seconds to drain…) / If above 13% RPM and 250 KIAS, repeat steps *3 and *4…"
  - Gouge p.77 #33 "Immediate Airstart": "a. Throttle – Off / Simultaneously perform steps 2 and 3 / b. GTS – Press and Hold / c. Throttle – Idle".
    - **No emergency oxygen step.** p.7 #14 does include "Pull Emerg. Oxygen actuator" first, and p.65 says to pull emergency O2 first for a flameout.
    - Says "**Press and Hold**", where the pack says "Press".
    - **No "if unsuccessful" branch** (30-sec relight, throttle off/drain, repeat).
    - The gouge splits airstarts into Immediate/Windmill/Assisted. Its windmill numbers (<25K, 13% N2, 250 KIAS) agree with the pack's 13%/250 KIAS repeat criteria. Its 25,000' and assisted (<15,000', <20%) limits are not in the pack.
  - Terminology: the gouge says "Emergency Oxygen Actuator" and "green apple". The pack says "Emergency oxygen green ring(s)".
- **D3 – Compressor Stall / EGT-RPM light.** Pack: "1. Throttle - idle / 2. EGT/RPM - check / If EGT > 450°C for > 6 s at idle: 3. Execute engine failure procedure / If EGT responds normally: 4. Throttle – slowly advance to minimum for safe flight / 5. Minimize throttle movements".
  - Gouge (p.59 #2, p.64 #7, p.7 #18, p.6 #24): "Throttle Idle, **Controls Neutralize**, EGT/RPM Monitor". The extra "Controls – Neutralize" step is **not in the pack**, and "Monitor" vs "check" differs.
  - p.59 #16 "first step is Throttle Idle – min for safe flight" blends steps 1 and 4.
  - The gouge's lock-in-stall criterion (p.54 #120 "EGT over 450 for 6 seconds after selecting idle") matches the pack.
- **D4 – Abort.** Pack: "1. Throttle - idle / 2. Speed brakes - extend / 3. Brakes - apply / 4. Hook – down (if required) / 5. Brakes – release prior to crossing the arresting gear".
  - Gouge p.5 #9: "IDLE, BOARDS **retract**, BRAKES, HOOK (1000 ft. prior)". This **contradicts** the pack, which says extend. p.7 #25 says "extend", which agrees.
  - The gouge adds "(1000 ft prior)" for the hook and has **no "Brakes – release prior to crossing the arresting gear" step** in its abort items. The only similar line is the long-field arrestment, p.71 #26 "Release brakes as you cross the cable".
- **D5 – Emergency Catapult Flyaway.** Pack: "1. Throttle - MRT / 2. Maintain 24 units AOA / If engine failed, or unable to stop settle: 3. Eject".
  - The gouge says "Throttle full / check full forward" instead of "MRT". 24 units AOA and eject match.
  - The gouge adds "if unable to eject, ditch straight ahead", which is not in the pack.
- **D6 – Brake Failure Ashore/Skid.** Pack: go around if flyaway airspeed available, otherwise "2. Throttle - idle / 3. Brakes - release / 4. Anti-skid switch - off / 5. Brakes – apply gradually / … 6. Hook – down (if required) / 7. Parking brake handle – pull (if required)".
  - Gouge p.68 #5 / p.74 #7 / p.8 #31: go around; "Wheel brakes – release / ANTI-SKID – OFF / Attempt braking / Hook – DOWN (1,000' prior to gear) / Throttle – OFF (if departing Rwy)". If airborne: "ANTI-SKID – OFF / Attempt a short field arrestment".
  - **No "Throttle – idle" first step and no "Parking brake – pull".** The gouge adds "Throttle – OFF (if departing runway)" and a short-field arrestment option.
- **D7 – Loss of Directional Control.** Pack: go-around / abort / blown tire: brakes release, anti-skid off, brakes apply gradually / NWS failure: "6. Paddle switch - press".
  - The gouge treats these as separate items. Blown tire: "Rudder – as required to counter swerve / Anti-skid – off prior to braking". NWS loss: "use differential braking". NWS AUG on taxi: "Momentarily press NWS button" (p.6 #25).
  - The gouge **never says "Paddle switch – press"** for an NWS failure.
  - It adds "short field arrestment, touch down 50' prior to gear" when directional control is in question (p.7 #6, p.64 #4, p.73 #33, p.74 #3).
- **D8 – Departure/Spin.** The gouge has no step-by-step boldface. Its aero facts are consistent with pack steps 5–10: "Rudder Full Opposite Turn Needle for both upright and inverted spins / Aileron Full with Turn Needle for Upright Spins / Aileron Full Opposite Turn Needle for Inverted Spins"; inverted = "0 AOA, neg G's". The gouge does not cover pack steps 1–4 or 11–13, or the 160 KIAS and 10,000' AGL eject numbers.
- **D9 – Total Electrical Failure.** Pack: "1. Emergency oxygen green ring(s) - pull" only. Gouge p.68 #2 / p.74 #2 agrees on step 1 ("Emergency Oxygen Actuator – Pull") and then lists follow-on steps that are not memory items in the pack: VMC, land as soon as practical, reset generator / check batteries, emergency gear extension, no-flap/no-slat arrested landing.
- **D10 – Adverse Physiological Symptoms / Rapid Decompression.** Pack (both): "1. Emergency oxygen green ring(s) - pull / 2. OBOGS flow selector(s) – off / 3. Descend below 10,000 feet cabin altitude."
  - The gouge has **no Rapid Decompression or Adverse Physiological Symptoms procedure**. The closest items: "Descend below 10,000 feet cabin alt. with an OBOGS Failure" (p.7 #1); "leave OBOGS OFF. Use the green apple" (p.66 #26, p.70 #14); "Canopy loss: descend to 10K or min. safe alt." (p.64, p.68, p.74).
  - Older terms: "OBOGS/ANTI-G switch off" (p.7 #8) vs the pack's "OBOGS flow selector(s) – off".
- **D11 – CABIN ALT warning light (not in pack).** The gouge repeatedly drills "OBOGS – on and mask tight / Reduce AOA / AIR FLOW knob – off then on / If light remains on – Descend below 25,000' MSL / Land as soon as practical" (p.64, 66, 67, 68, 70, 74). It has no equivalent in the 22-item pack. The 25,000' figure should not be confused with the pack's 10,000' cabin altitude for decompression or physiological symptoms.
- **D12 – Smoke or Fumes.** Pack: "1. Mask – on/tight / 2. Initiate controlled descent to below **18,000 feet MSL** / 3. Air Flow Knob – Off (below 18,000 feet MSL if possible) / If unable…: 4. Airspeed – reduce (as practical) / 5. Warn other cockpit occupant / secure loose items / 6. Seat - lower / 7. MDC Firing Handle - pull".
  - Gouge p.70 #12 / p.75 #13 / p.66 #24 / p.7 #5: "Altitude – Descend below **25,000'** (if practical) / Air Flow knob – Off / … Airspeed – Reduce / Warn other cockpit occupant / secure loose items / Seat – Lower / **Visor – Down** / MDC Firing Handle – Pull / **Land as soon as possible**".
  - Differences: **no "Mask – on/tight" step**; **25,000' instead of 18,000' MSL**; extra **Visor – Down** and **Land as soon as possible** steps.
- **D13 – Fire Warning Light, in-flight.** Pack: "1. Throttle – minimum for safe flight / 2. Check for secondary indications of fire / If fire confirmed or flight control lost: 3. Eject / If fire not confirmed and control effectiveness remains: 4. Land as soon as possible".
  - Gouge p.76 #31: "a. Throttle – Idle (min for safe flight) / b. Secondary Indications – Check / If secondary indications exist – c. Emergency Oxygen Actuator – Pull / d. Throttle – Off / e. Fuel Shutoff Handle – Pull / If secondary indications persist – f. EJECT / If fire is extinguished – g. Prepare for controlled ejection / If unable to eject – h. Prepare for Flameout Approach".
  - The old procedure has extra steps (O2, throttle off, fuel shutoff), "prepare for controlled ejection", and "flameout approach". It has **no "land as soon as possible" branch** and does not name "flight control lost" as an eject trigger, although p.65 says "IF FLIGHT CONTROLS UN-C[ONTROLL]ABLE EJEC[T]".
  - Ground and takeoff branches match: on deck → shutdown/egress; takeoff → abort, or eject if confirmed and unable to abort.
- **D14 – GTS Fire Warning Light.** Pack: GROUND "1. Execute emergency shutdown / egress"; IN-FLIGHT "1. Engine switch - off". Gouge p.76 #30 (on deck): "a. Engine switch – Off / b. Throttle – Off / c. Fuel Shutoff Handle – Pull / d. Battery Switches – Off / e. Egress". That puts the engine switch **before** the throttle, differs from the pack's shutdown order (Throttle → Engine switch → Fuel → Seats → Batt), and omits Ejection Seats – Safe. The gouge's in-flight answer ("Engine Switch Off is the first step", p.59 #12, p.65, p.58) matches the pack.
- **D15 – OIL PRESS Warning Light.** Pack: "1. Throttle – Set and maintain **78 to 87% rpm**. 2. Minimize throttle movements." Gouge: "min for safe flight" (p.59 #5, hw "MINIMIZE THROTTLE MVMTS"), "**idle**" (p.64 #10), and "min" (p.61). The throttle setting **conflicts** with the pack; only "minimize throttle movements" matches.
- **D16 – OXYGEN Warning Light.** Pack: "IN-FLIGHT 1. Throttle - Set minimum 80% rpm. 2. Execute Adverse Physiological Symptoms (as required)." Gouge: "system won't reset set OBOGS/ANTI-G switch off" (p.7 #8); "descend to less than 10,000 CABIN ALT or Minimum Safe Altitude" (p.68 #7, p.75 #19). The gouge has **no 80% rpm throttle step**.
- **D17 – TP Hot Caution Light.** Ground: the gouge's "Throttle – Off / Fuel Shutoff Handle – Pull / Battery Switches – Off / Egress" (p.77 #34) differs from the pack's shutdown in the same ways as D1. In-flight: "Throttle idle (min safe flight)" (p.5 #12) is consistent with the pack's "Throttle – minimum for safe flight".
- **Consistent items:**
  - Clear Engine / overspeed start: "Throttle Off" first (p.59 #11, p.77 #36).
  - Engine failure below 1,500' AGL and below 180 KIAS → Eject (many pages).
  - Electrical Fire → "GEN switch off" (p.7 #3).
  - Asymmetric flaps/slats → "return flaps to previous position" (p.7 #7).
  - Fire on takeoff → abort, or eject if unable and confirmed.
  - Catapult settle → 24 units AOA, eject.
- **Gouge EPs not in the 22-item pack** (non-immediate-action items): Generator Failure, CABIN ALT warning, ECA 2 caution, HYD 1/HYD 2 failure, SLATS caution, CAUG caution, Blown Tire (T/O and landing, single/dual), Wheel Brake Failure on touchdown, Short/Long Field Arrestment, Launch Bar warning, Canopy Loss/CANOPY light, MFD/DEU/GINA/pitot-static failures, LP PUMP/F PRESS, ACCEL, Ditching, Midair.

---

## 21. Unreadable / uncertain material

- **p.29:** section cover ("ENGINEERING REVIEW"), essentially blank.
- **p.36:** handwritten start-sequence timeline. The text is read, but parts of the diagram (numbers on the time axis, "52%[?] N2") are uncertain.
- **p.40:** HYD 1 PRESS caution-light extinguish value is garbled ("200 22+ psi"), and HYD FAIL requirement #1 is overwritten by hand. See also p.48 and p.57.
- **p.45:** standby gyro duration garbled ("9 min 2 1/4'").
- **p.57:** HYD 1 light value is overwritten by hand.
- **p.61 / p.63:** left edge cut by binding, so first letters were reconstructed in [brackets]. "ECA 2[?] 90/95" is uncertain.
- **p.62:** items D and F are scribbled through in the source but remain legible.
- **p.65:** right edge cut off ("EJEC[TION]", "SERVIC[ES]", "<180[KIAS]").
- **p.66:** handwritten smoke/fumes list. "VISOR[?]" and "LAND AS[AP][?]" are uncertain.
- **p.69:** one line of the faint pencil topic list is illegible. "ASHORE/AFLOAT" are uncertain.
- **p.70:** EP 11X item 8 is missing from the scan (page break between p.68 and p.70). Top lines of p.71 and p.72 are cut off.
- **p.73:** page is sideways. A boxed diagram numbered 1–8 is unreadable except "<60KTS <80KTS".
- **p.86:** BI test gouge is partly garbled. Only items 14–15 (VOR / GINA loss) are EP-adjacent.
- **p.31 #17:** the answer is scribbled over, so the reading is doubtful.
- Aero spin tables (p.20, p.25) are hand-copied or low-contrast. Some cells are flagged [?].

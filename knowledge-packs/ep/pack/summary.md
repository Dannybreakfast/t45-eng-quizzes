# Summary — T-45C EP Gouge + Quizlet + IC 21/43

**Sources:**
- IC 21/43 (Nov 2023), page 1: the 22 current immediate-action EPs (`/workspace/phrase-stack-memorizer/eps-pack.js`)
- T-45C student gouge PDF (`drive-source.pdf`, 86 scanned pages, ~2007), with the EP content extracted to `ep-extract.md` (page tags p.NN; EP pages listed in `ep-pages.json`)
- Quizlet [T45C EP1](https://quizlet.com/783093107/t45c-ep1-flash-cards/) (26 cards) and [T45 EP2](https://quizlet.com/783149178/t45-ep2-flash-cards/) (36 cards), verbatim

## Short summary
This is the EP exam gouge from the old 06X/11X tests: EP Test 1/2, Eagle EP 06X, "PRESS" E.P. gouge, "Jolly Rodgers" EMEP-06X, two versions of EP 11X, and systems/limits Q&A. It covers ground fires and egress, starts, abort, catapult, engine failure and airstart, stalls, fire, electrical, oxygen/ECS, hydraulics, flight controls, brakes and blown tires, arrestments, spins, and avionics failures. The gouge predates IC 21/43 and differs on several immediate actions, so the **IC 21/43 wording is the answer to memorize**.

## Key takeaways
1. **Emergency shutdown/egress (IC):** Throttle – Off → Engine switch – Off → Fuel Shutoff Handle – Pull → **Ejection Seats – Safe** → Batt switches – Off. The gouge drops the seats step.
2. **Engine failure:** below **1,500 ft AGL and 180 KIAS → Eject**; otherwise airstart.
3. **Airstart (IC):** **Green ring(s) – pull**, Throttle – off, then simultaneously GTS Start Button – Press + Throttle – Idle. If there is no relight within **30 s**, Throttle – off. Repeat if above **13% / 250 KIAS**. Windmill envelope (gouge): <25K, 13% N2, 250 KIAS. Assisted: <15K, <20%.
4. **Compressor stall / EGT-RPM (IC):** Throttle – idle; **EGT/RPM – check**; >450°C for >6 s at idle → engine failure procedure. The gouge's "Controls – Neutralize" step is outdated.
5. **Abort (IC):** Throttle – idle; Speed brakes – **extend**; Brakes – apply; Hook – down (if req); **Brakes – release prior to crossing the gear**. The gouge's "BOARDS retract" is wrong.
6. **Cat flyaway:** Throttle – MRT, **24 units AOA**, eject if engine failed or unable to stop settle. If unable to eject: ditch straight ahead (gear up, flaps down).
7. **Fire light in flight (IC):** Throttle – min for safe flight; check secondaries (EGT↑, FF↑); eject if confirmed or flight control lost; otherwise land as soon as possible. **No airstart** for a fire.
8. **GTS FIRE:** in flight Engine switch – off; on the ground, emergency shutdown/egress. **TP HOT:** ground = shutdown/egress; in flight = Throttle – min for safe flight.
9. **Smoke/fumes (IC):** **Mask – on/tight**, descend below **18,000 MSL** (gouge said 25K), Air Flow Knob – off, then airspeed reduce, warn/secure, seat lower, MDC pull.
10. **Oxygen (IC):** OXYGEN light → Throttle **min 80% rpm**, then Adverse Physiological Symptoms. Decompression/physiological → green ring, OBOGS flow selector off, **below 10,000 ft cabin**. Gouge CABIN ALT light → descend below **25,000** (different procedure).
11. **Oil press (IC):** **78–87% rpm**, minimize throttle movements (gouge "idle/min" is outdated).
12. **Electrical:** electrical fire → Gen switch – off. Total electrical → green ring(s) – pull; no load shedding; no emergency flaps; gear manual only; no-flap arrested landing. Gen failure → confirm engine operation, reset; lose HUD and right MFD; ORIDE keeps the left MFD; primary stab trim only.
13. **Brakes/directional control (IC):** Throttle – idle, brakes release, anti-skid off, brakes apply gradually, hook, parking brake. NWS failure → **Paddle switch – press**. Afloat: idle, parking brake, hook, transmit.
14. **Hydraulics:** reduce below 300 KIAS/0.6M; HYD 2 failure → monitor HYD 1 gauge; RAT 2500–3000 psi; RAT deploys at 1500, resets at 1800; caution at 1660 ± 110; HYD 1 failure keeps emergency gear/flaps/arrested landing; both failed and uncontrollable → eject.
15. **Spin (IC):** rudder full opposite turn needle; lateral stick **with** the needle when upright (AOA >28), **opposite** when inverted (AOA 0); neutralize at 160 KIAS; eject out of control through 10,000 ft AGL.

## Gouge vs IC 21/43 discrepancies
See `ep-study-guide.md` §1 and `ep-extract.md` §19–20. The 17 differences are in shutdown/egress, airstart, compressor stall, abort, cat flyaway, brake failure, directional control, physiological/decompression, CABIN ALT, smoke/fumes, fire in flight, GTS fire, oil press, oxygen light, and TP HOT.

## Pack contents
- `notebooklm-source.md/.txt`: IC 21/43 list + full gouge EP extract (verbatim, page-tagged) + both Quizlet sets verbatim
- `flashcards.md` / `anki-quizlet.tsv`: 405 cards
- `quiz.md` / `quiz.json`: 129-question MCQ (IC 21/43 answers)
- `ep-study-guide.md/.html`: study guide
- `ep-extract.md`, `ep-pages.json`: gouge extraction; `quizlet-*.{json,tsv,md}`: Quizlet sets

# T-45 / CNATRA Navigation — Knowledge Packs (NAV)

NotebookLM-ready sources for Navy T-45 Intermediate Navigation study.

| # | Pack ID | Title | Captions / cards | Pack path |
|---|---------|-------|------------------|-----------|
| 1 | `gouge` | NAV Gouge (PDF excerpts + Quizlet) | 41 Quizlet cards; PDF pp. 11–13 & 78–82 | `knowledge-packs/nav/gouge/` |
| 2 | `nav0102` | NAV0102 Introduction to INAV and Voice Procedures | 19 slides (silent screen OCR / watchVideo); 22 flashcards; 15 quiz Qs | `knowledge-packs/nav/nav0102/` |
| 3 | `nav0103` | NAV0103 Departure and Terminal Procedures | 148 frames (silent screen OCR); 83 flashcards; 40 quiz Qs | `knowledge-packs/nav/nav0103/` |
| 4 | `nav0104` | NAV 0104 Approach Plates | 2183 transcript words (YouTube ASR) | `knowledge-packs/nav/nav0104/` |

Video ID for NAV0104: `ddxMAtQdaa4`.

## Per-pack files

Each pack folder contains:

- `transcript.md` — full verbatim auto-captions (video packs) or cleaned screen content (silent OCR packs)
- `summary.md` — short summary + key takeaways
- `flashcards.md` — Q/A flashcards
- `quiz.md` — multiple-choice quiz + answer key
- `anki-quizlet.tsv` — tab-separated import for Anki/Quizlet
- `notebooklm-source.md` / `notebooklm-source.txt` — combined upload source
- `*.en.vtt` / `_raw_transcript.txt` — raw ASR artifacts (video packs)

## Sources

### NAV Gouge
- PDF: `gouge/drive-source.pdf` (scanned) → OCR text `gouge/pdf-pages-11-13-78-82.txt`; page-split PDFs in `gouge/pages/`
- Quizlet: https://quizlet.com/782780920/nav-flash-cards/ → `gouge/quizlet-782780920.tsv` / `.md`


### NAV0102
- tsharp.navsea course: **Introduction to INAV and Voice Procedures** (screen recording `nav0102/source.mp4`, ~28s, silent audio)
- Cleaned slides: `nav0102/watchvideo-slides.md` / `screen-content.md` / `transcript.md`
- Raw OCR: `nav0102/screen-ocr.txt` (tesseract from frames)

### NAV0103
- tsharp.navsea course: **Departure and Terminal Procedures** (screen recording `nav0103/source.mp4`, ~148s, silent audio)
- Cleaned slides: `nav0103/screen-content.md` / `transcript.md` (from OCR; prefer `watchvideo-slides.md` if added later)
- Raw OCR: `nav0103/screen-ocr.txt` (tesseract from 148 frames)

### NAV 0104
- [NAV0104 Approach Plates](https://youtu.be/ddxMAtQdaa4) — Project ThreeSixty
- Verbatim YouTube ASR (`nav0104/ddxMAtQdaa4.en.vtt`)

## Local quizzes

Pack `quiz.md` / `flashcards.md` / `anki-quizlet.tsv` are consumable by `/workspace/t45-local-quizzes/_generate_quizzes.py` (TOPIC_META includes `nav` → `t45-nav-packs`). Staged copies also under `quiz-inputs/`. Do **not** republish GitHub Pages until requested.

## ASR / OCR notes

- NAV0102: silent screen recording; watchVideo slide transcription + tesseract OCR (no ASR).
- NAV0103: silent screen recording; tesseract OCR of 148 frames cleaned to screen-content (no ASR). Thin OCR on DD-1801 forms, STAR/approach charts, circling diagrams, FLIP MON legend.
- NAV0104 captions: yt-dlp `--write-auto-sub` (en auto-generated).
- Gouge PDF has no text layer (CCITT scanned images); pages 11–13 and 78–82 OCR’d with tesseract. Pages 81–82 are heavily handwritten — OCR quality is lower there.


## Published on GitHub Pages

Large media omitted from this publish tree: `source.mp4`, `frames/`, and raw `ocr/` image dumps. Text sources (transcripts, flashcards, quizzes, NotebookLM bundles) are included.

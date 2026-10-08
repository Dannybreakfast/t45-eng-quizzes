# T-45C Emergency Procedures — Knowledge Packs (EP)

| # | Pack ID | Title | Contents | Pack path |
|---|---------|-------|----------|-----------|
| 1 | `pack` | EP Gouge Quiz (IC 21/43 answers) | 129 MCQ; 405 flashcards; study guide; NotebookLM source | `/workspace/t45-ep-packs/pack/` |
| 2 | `quizlet-ep1` | T45C EP1 (Quizlet) | 26 verbatim cards → MCQ | `/workspace/t45-ep-packs/quizlet-ep1/` |
| 3 | `quizlet-ep2` | T45 EP2 (Quizlet) | 36 verbatim cards → MCQ | `/workspace/t45-ep-packs/quizlet-ep2/` |

Other folders: `gouge/` (PDF OCR + `ep-extract.md` + `ep-pages.json`), `quizlet/` (raw Quizlet exports), `build/` (build scripts: `python3 build/build.py`).

Local quizzes: `/workspace/t45-local-quizzes/_generate_quizzes.py` (TOPIC_META `ep` → `t45-ep-packs`; `quiz.json` is used verbatim when present).

# Mastrr -- Track 3

This repo contains the database schema, FastAPI service, question bank, and
React dashboard for the diagnostic + roadmap flow. The project is now set up
as a standalone workspace and resolves its data files from the current
folder layout instead of assuming sibling `diagnostic/` and `knowledge/`
repositories.

## Python backend

```bash
python -m pip install fastapi uvicorn pydantic networkx scikit-learn anthropic python-multipart
python -m uvicorn main:app --host 127.0.0.1 --port 8000
```

The app boots at http://127.0.0.1:8000 and seeds the SQLite database from
`question_bank.csv` and the graph data under `MASTRR/MASTRR/` on first run.

## Frontend

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Validation status

The project is currently valid for a first review with these checks passing:

- Backend startup: `uvicorn main:app --host 127.0.0.1 --port 8000`
- Frontend build: `npm run build`
- API smoke test: server responds on the live endpoints under `/health`,
  `/diagnostic/start`, and `/gaps/{learner_id}`

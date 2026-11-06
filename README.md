# AIDL Day 2 Portfolio

A full-stack personal portfolio built with React and FastAPI. The site brings projects, skills and experience together and includes a contact form backed by SQLite.

## Project structure

- `frontend/` — React, TypeScript, Vite, Tailwind CSS and Framer Motion
- `backend/` — FastAPI application, SQLite database and API routes
- `implementation_plan.md` — the original design and implementation plan

The frontend uses a development proxy for API requests. The backend creates its database and seeds placeholder content on first startup; replace that content before using the portfolio as your own.

## Run locally

Start the backend from the repository root:

```powershell
cd backend
python -m venv venv
.\venv\Scripts\python.exe -m pip install -r requirements.txt
Copy-Item .env.example .env
.\venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000
```

In a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open the address printed by Vite. The API documentation is available at http://localhost:8000/docs. SMTP settings are optional; see [backend/README.md](backend/README.md) for details.

## More information

The [frontend guide](frontend/README.md) covers the interface and its development setup. The [backend guide](backend/README.md) lists the API endpoints and configuration.

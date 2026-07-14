"""Seed Aaron Jacob's portfolio data into the SQLite database."""
from .database import SessionLocal
from .models import Project, Skill, Experience


PROJECTS = [
    {
        "title": "Smart Expense Tracker",
        "description": "An interactive Streamlit app to track, categorise, and visualise personal expenses with ML-powered anomaly detection.",
        "long_description": (
            "Built a full-featured expense tracking dashboard using Streamlit and Python. "
            "Users can upload CSV exports from their bank, and the app automatically categorises "
            "transactions using a scikit-learn classifier trained on labelled spending data. "
            "Interactive Plotly charts show monthly trends, category breakdowns, and budget vs actual. "
            "An Isolation Forest model flags unusual spending patterns in real time."
        ),
        "tech_stack": ["Python", "Streamlit", "Pandas", "scikit-learn", "Plotly", "SQLite"],
        "github_url": "https://github.com/aaronjacob/smart-expense-tracker",
        "demo_url": None,
        "featured": 1,
    },
    {
        "title": "Student Result Management System",
        "description": "A Java-based desktop application for managing student marks, generating grade reports, and exporting results as PDFs.",
        "long_description": (
            "Designed and built a Java Swing desktop application for a college department to manage "
            "student results across semesters. Features include CRUD operations on student records, "
            "automatic grade calculation, and PDF report generation via iText. "
            "Used JDBC for MySQL connectivity and followed the MVC design pattern throughout. "
            "Reduced manual data-entry errors by ~80% in a pilot with 300+ students."
        ),
        "tech_stack": ["Java", "Java Swing", "JDBC", "MySQL", "iText", "MVC"],
        "github_url": "https://github.com/aaronjacob/student-result-mgmt",
        "demo_url": None,
        "featured": 1,
    },
    {
        "title": "COVID-19 Data Dashboard",
        "description": "Real-time Streamlit dashboard visualising global COVID-19 statistics with country-level drill-down and trend forecasting.",
        "long_description": (
            "Fetched live data from the disease.sh public API and built a Streamlit dashboard "
            "that renders choropleth maps, time-series charts, and a Prophet-powered 30-day "
            "forecast for any selected country. "
            "Implemented caching with @st.cache_data to keep API calls under 5 seconds. "
            "The project was featured in the college tech fair and attracted 200+ visitors."
        ),
        "tech_stack": ["Python", "Streamlit", "Pandas", "Plotly", "Prophet", "REST API"],
        "github_url": "https://github.com/aaronjacob/covid-dashboard",
        "demo_url": None,
        "featured": 0,
    },
    {
        "title": "Mini Shell in C",
        "description": "A UNIX-style shell implemented in C supporting piping, I/O redirection, background jobs, and built-in commands.",
        "long_description": (
            "Implemented a feature-rich command-line shell from scratch in C as part of an "
            "Operating Systems course project. Supports: command parsing with tokenisation, "
            "pipe chaining (cmd1 | cmd2 | cmd3), I/O redirection (<, >, >>), "
            "background execution (&), and built-ins (cd, pwd, exit, history). "
            "Used fork/exec/wait system calls and signal handling for SIGCHLD. "
            "Scored 98/100 and was selected as a reference implementation by the professor."
        ),
        "tech_stack": ["C", "UNIX System Calls", "fork/exec", "Signals", "Makefile"],
        "github_url": "https://github.com/aaronjacob/mini-shell",
        "demo_url": None,
        "featured": 0,
    },
]

SKILLS = [
    # Core Languages
    {"name": "Python", "category": "Backend", "level": 90},
    {"name": "Java", "category": "Backend", "level": 82},
    {"name": "C", "category": "Backend", "level": 78},
    {"name": "SQL", "category": "Backend", "level": 75},
    # Data / ML
    {"name": "Streamlit", "category": "ML_AI", "level": 88},
    {"name": "Pandas / NumPy", "category": "ML_AI", "level": 85},
    {"name": "scikit-learn", "category": "ML_AI", "level": 78},
    {"name": "Plotly / Matplotlib", "category": "ML_AI", "level": 80},
    {"name": "Prophet", "category": "ML_AI", "level": 65},
    {"name": "OpenCV", "category": "ML_AI", "level": 60},
    # Frontend / Frameworks
    {"name": "HTML / CSS", "category": "Frontend", "level": 72},
    {"name": "JavaScript", "category": "Frontend", "level": 65},
    {"name": "Java Swing", "category": "Frontend", "level": 75},
    {"name": "Flask", "category": "Frontend", "level": 70},
    # Tools
    {"name": "Git / GitHub", "category": "Tools", "level": 88},
    {"name": "VS Code", "category": "Tools", "level": 95},
    {"name": "MySQL / SQLite", "category": "Tools", "level": 78},
    {"name": "Jupyter Notebook", "category": "Tools", "level": 85},
    {"name": "Linux / Bash", "category": "Tools", "level": 72},
    {"name": "Postman", "category": "Tools", "level": 68},
]

EXPERIENCE = [
    {
        "title": "Python & Data Science Intern",
        "organization": "TechSpark Solutions",
        "type": "research",
        "start_date": "May 2025",
        "end_date": "Jul 2025",
        "description": (
            "Built three client-facing Streamlit dashboards for sales analytics, inventory tracking, "
            "and customer churn prediction. Automated ETL pipelines using Pandas, cutting report "
            "generation time from 4 hours to 12 minutes. Collaborated with a 4-person team using Git."
        ),
        "location": "Bangalore, India",
    },
    {
        "title": "Best Project Award — Dept. Tech Exhibition",
        "organization": "College of Engineering",
        "type": "hackathon",
        "start_date": "Mar 2025",
        "end_date": None,
        "description": (
            "Won 1st place among 45 teams for the COVID-19 Streamlit Dashboard project. "
            "Recognised for real-time data integration, clean UI/UX, and live forecasting features. "
            "Presented to faculty panel and industry judges."
        ),
        "location": "Pune, India",
    },
    {
        "title": "Finalist — State-Level Coding Olympiad",
        "organization": "Maharashtra Coding Council",
        "type": "hackathon",
        "start_date": "Jan 2025",
        "end_date": None,
        "description": (
            "Qualified for the state finals in a competitive programming event testing DSA "
            "proficiency in C and Java. Solved 4/5 problems in the allotted time, ranking in the "
            "top 15% of 800+ participants."
        ),
        "location": "Mumbai, India",
    },
    {
        "title": "Teaching Assistant — Programming Fundamentals (C)",
        "organization": "College of Engineering — CS Department",
        "type": "workshop",
        "start_date": "Jul 2024",
        "end_date": "Nov 2024",
        "description": (
            "Assisted the professor in conducting lab sessions for 60 first-year students. "
            "Prepared weekly lab exercises, held doubt-clearing sessions, and graded assignments. "
            "Students reported a 30% improvement in lab scores over the semester."
        ),
        "location": "Pune, India",
    },
    {
        "title": "Placement Preparation Lead",
        "organization": "College Placement Cell — Student Volunteer",
        "type": "workshop",
        "start_date": "Aug 2025",
        "end_date": "Present",
        "description": (
            "Organising weekly mock interviews, aptitude workshops, and group discussions for "
            "final-year students. Curating DSA problem sets in Java/Python and hosting coding "
            "sessions on LeetCode. Helping 50+ peers prepare for campus recruitment drives."
        ),
        "location": "Pune, India",
    },
    {
        "title": "Technical Coordinator — AIDL",
        "organization": "Artificial Intelligence and Deep Learning Club (AIDL)",
        "type": "workshop",
        "start_date": "Jul 2025",
        "end_date": "Present",
        "description": (
            "Serving as Technical Coordinator for the AIDL college club — organising AI/ML workshops, "
            "hands-on coding sessions, and guest lectures. Mentoring junior members on Python, machine "
            "learning fundamentals, and Streamlit app development. Leading technical content creation "
            "and demo projects that bridge theory and practice for 100+ club members."
        ),
        "location": "Pune, India",
    },
]


def seed():
    db = SessionLocal()
    try:
        if db.query(Project).count() == 0:
            db.add_all([Project(**p) for p in PROJECTS])

        if db.query(Skill).count() == 0:
            db.add_all([Skill(**s) for s in SKILLS])

        if db.query(Experience).count() == 0:
            db.add_all([Experience(**e) for e in EXPERIENCE])

        db.commit()
        print("[OK] Database seeded with Aaron Jacob's portfolio data")
    finally:
        db.close()



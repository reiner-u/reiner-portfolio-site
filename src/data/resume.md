## About

I'm a Software Engineering student at McMaster University, currently on my first co-op placement with the Ontario Public Service. I like understanding how things actually work under the hood, whether that's a full-stack web app, a puzzle-solving algorithm, or a piece of hardware built up from a bare microcontroller.

[LinkedIn](https://linkedin.com/in/reinerethan-umila/) · [GitHub](https://github.com/reiner-u)

## Education

### Bachelor of Technology, Software Engineering Technology (Co-op)
McMaster University, expected December 2027

### Ontario College Advanced Diploma, Computer Engineering Technology
Seneca Polytechnic, 3.8 GPA, Honours

## Experience

### Software QA Intern
Ontario Ministry of Public and Business Service Delivery and Procurement, May 2026 – Present

On the OSAP team for the full co-op term, testing both the student-facing and administrator-facing sides of the OSAP application across Full-Time, Part-Time, Microcredential, OLSG, and OLSG-ME program types: manually, and increasingly through a set of Python Playwright scripts I built on my own initiative to speed up repetitive parts of testing, like student profile creation, separate from the team's existing (and much older) UFT/VBScript automation. Log and track defects through HP's ALM, working a build-test-defect-retest loop directly with developers. Along the way I've traced a few defects back to their root cause in older academic-year applications, surfaced through regression testing after the platform's migration to Azure, and rewrote some test case documentation that hadn't been touched in years so the next cohort of co-op students inherits something clearer than I did.

### Warehouse Attendant
University of Toronto Press, 2022 – 2026

Trusted with direct access to the AS400 inventory management system, where a single mis-entry can misplace stock and disrupt the whole picking operation. Diagnosed a persistent inventory backlog, then designed and independently executed a fix, cutting the required cleanup cycle from weekly to monthly. Regularly sought out by colleagues to troubleshoot workstation, printer, and warehouse-software issues.

## Projects

The full write-ups, with screenshots and links, live on the [Projects page](/projects). In short:

- **Noctus**: a Notion-style productivity app I designed, built, and deployed live on Vercel (Next.js, TypeScript, Supabase). Lets you define your own columns per board and actually enforces the right data type at the database level instead of just trusting the app to get it right. Built for a partner's real academic scheduling workflow. My first time working with a managed database, OAuth, and a genuinely layered permission model, Row Level Security plus Postgres GRANTs, which fail differently and both have to be correct.
- **Weather App**: a full-stack app with a FastAPI backend and a React frontend, built to understand what actually happens when a frontend talks to a backend.
- **BlockBlast Solver**: a from-scratch Python solver for the mobile puzzle game, built to learn backtracking search and explore Streamlit.
- **HumanBenchmark Game Device**: a capstone project built with a partner over 2.5 months: custom PCBs, ESP32 firmware in C++, and a Node-RED dashboard.

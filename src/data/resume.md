## About

I'm a Software Engineering student at McMaster University, currently on my first co-op placement with the Ontario Public Service. I like understanding how things actually work under the hood, whether that's a full-stack web app, a puzzle-solving algorithm, or a piece of hardware built up from a bare microcontroller.

[LinkedIn](https://linkedin.com/in/reinerethan-umila/) · [GitHub](https://github.com/reiner-u)

## Education

### Bachelor of Technology, Software Engineering Technology (Co-op)
McMaster University, expected December 2027

### Ontario College Advanced Diploma, Computer Engineering Technology
Seneca Polytechnic, 3.8 GPA, Honours

## Experience

### Software QA Intern (Co-op)
Ontario Ministry of Public and Business Service Delivery and Procurement, May – December 2026

I'm on the OSAP team for my whole co-op term, testing both sides of the application: the site students use to apply, and the one financial aid staff use to review and process those applications. Most of that is manual testing on pre-production builds, with defects logged in HP's ALM and a build, test, fix, retest loop with the developers.

Setting up a fresh test student by hand takes a lot of clicking, so on my own initiative I wrote a Python Playwright script that does it end to end: it registers the account, generates a valid test SIN, and records the new account number for me. The team's existing automation runs on much older UFT/VBScript tooling, so it's been a good look at both ends of the testing world.

A couple of highlights so far: regression testing after OSAP moved to Azure, I found real defects in older academic years' application logic that nobody had re-checked since the move. I also rewrote test case documents that hadn't been touched in years, so the next group of co-op students inherits something clearer than I did.

### Warehouse Attendant
University of Toronto Press, 2022 – 2026

Trusted with direct access to the AS400 inventory system, where one wrong entry can "lose" a book and throw off the whole picking operation. Figured out why one area kept clogging up, then planned and carried out the fix myself, cutting its cleanup from weekly to monthly. Also became the unofficial go-to for coworkers' computer, printer, and warehouse-software problems.

## Projects

The full write-ups, with screenshots and links, live on the [Projects page](/projects). In short:

- **Noctus**: a Notion-style productivity app I designed, built, and deployed live on Vercel (Next.js, TypeScript, Supabase). Lets you define your own columns per board and actually enforces the right data type at the database level instead of just trusting the app to get it right. Built for a partner's real academic scheduling workflow. My first time working with a managed database, OAuth, and a genuinely layered permission model, Row Level Security plus Postgres GRANTs, which fail differently and both have to be correct. It's also where I learned, the hard way, how React decides whether to update a component or quietly replace it.
- **Weather App**: a full-stack app with a FastAPI backend and a React frontend, built to understand what actually happens when a frontend talks to a backend.
- **BlockBlast Solver**: a from-scratch Python solver for the mobile puzzle game, built to learn backtracking search and explore Streamlit.
- **HumanBenchmark Game Device**: a capstone project built with a partner over 2.5 months: custom PCBs, ESP32 firmware in C++, and a Node-RED dashboard.

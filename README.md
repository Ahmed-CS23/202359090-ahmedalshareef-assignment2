# Ahmed Alshareef — Portfolio (Assignment 2)

A responsive personal portfolio built with semantic HTML, CSS, and plain JavaScript. This version extends the Assignment 1 portfolio with project search and topic filters, a theme preference that persists in the browser, and an accessible contact form demo with validation and clear feedback.

**Student:** Ahmed Alshareef  
**Student ID:** `202359090`

## Features

- **Project discovery:** Filter the two coursework projects by topic or search all card text and keywords. Search ignores letter case, accents, and punctuation; separate words can match in any order. Press Escape in the search field to clear it.
- **Saved theme preference:** Switch between light and dark themes. JavaScript stores the choice in `localStorage`, updates the browser theme color, and falls back to the system preference if no choice exists. If storage is disabled, the toggle still works for the current visit.
- **Contact form demo:** Checks name, email, and message length; identifies fields that need attention; and confirms valid input. This is a front-end demonstration and does not send or store the message.
- **Responsive and accessible interface:** Keyboard focus styles, a skip link, descriptive project-image alternatives, labels, live feedback, reduced-motion support, and layouts for narrow and wide screens.

Before publishing, replace the generic profile placeholder in `assets/images/images-1.jpg` with a photo you have permission to use, then update its alt text in `index.html`.

## Run locally

No package installation or build step is required.

1. Download or clone the repository.
2. Open `index.html` in a current browser. For a local web server, run `python -m http.server 8000` from the project folder and visit `http://localhost:8000`.
3. Resize the browser and try the project filters, search, theme toggle, and form validation.

## Project structure

```text
assignment-2-202359090/
├── index.html
├── css/styles.css
├── js/script.js
├── assets/images/
├── docs/
│   ├── ai-usage-report.md
│   ├── technical-documentation.md
│   └── ai-evidence-checklist.md
├── .gitignore
└── README.md
```

## AI assistance

I used ChatGPT to interpret the assignment and feedback, draft the initial site and documentation, and review accessibility and user feedback. I then improved project search, added Escape-to-clear behavior and browser theme-color support, added a `matchMedia` fallback, improved image alternatives, and added image-loading hints. The detailed usage log and implementation notes are in `docs/ai-usage-report.md`. I must still include the required AI evidence with my Blackboard submission and report only tests I have actually performed.

## GitHub submission

Create a **public** repository named `202359090-ahmedalshareef-assignment2` (adjust the name if your instructor requires a different exact format). Commit the project with meaningful messages, including the required AI credit on commits containing AI-assisted code, for example `Assisted-by: ChatGPT (GPT-6)`. Do not commit AI conversation exports or the AI Evidence ZIP. Add the repository URL to your Blackboard submission.

## Limitations

The contact form only validates the fields in the browser. It has no server endpoint and does not transmit messages. The project list is local HTML data; there is no external API.

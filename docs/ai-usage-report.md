# AI Usage Report — Assignment 2

**Student:** Ahmed Alshareef  
**Student ID:** `202359090`  
**Report date:** 2026-10-19

## Purpose and scope

I used ChatGPT (GPT-6) to interpret the Assignment 2 brief and Assignment 1 feedback, suggest and draft portfolio interactions, review accessibility and user feedback, and help write the project documentation. I then reviewed and improved the generated project. The specific changes visible in the submitted source are listed below so I can explain what I changed and why.

The site is still a front-end project: the contact form validates input locally and does not send or save a message. I have not claimed that the browser verification checklist is complete; record only checks I personally perform. This report covers the ChatGPT assistance recorded here. If I used any other AI tool or conversation for Assignment 2, I must add it to the log and evidence.

## Usage log

| ID | Tool (model) | Date | Purpose | Files affected | What changed and how it was verified |
| --- | --- | --- | --- | --- | --- |
| C01 | ChatGPT (GPT-6) | 2026-10-19 | Interpreted the assignment and feedback; generated an initial site and documentation draft; reviewed this improved project and aligned the documentation with its current implementation. | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md`, `docs/ai-evidence-checklist.md`. | The initial implementation and documentation were AI-assisted. I then improved the project by adding accent- and punctuation-insensitive multiword search over project keywords and card text, Escape-to-clear search, a browser theme-color update, a fallback when `matchMedia` is unavailable, more descriptive image alt text, and image loading hints. In this review, ChatGPT checked JavaScript syntax and statically checked page IDs, in-page links, alt attributes, and image paths. Those checks do not verify interactive behavior in a browser; I will record any browser checks I perform in the checklist. |

## My implementation notes

- **Theme:** `setTheme()` changes the root element's `data-theme`, updates the toggle's label and `aria-pressed` value, and sets the browser theme-color metadata. The saved `localStorage` value takes priority; otherwise the page uses the system color preference when `matchMedia` is available and defaults to light when it is not. Storage access is wrapped in `try` blocks so the theme still works during the current visit if storage is blocked.
- **Project search:** `normalizeSearchText()` removes Latin diacritics, lowercases text, and turns punctuation into spaces. The search terms are matched independently against the project keywords and visible card text, so terms can appear in any order. The chosen category filter is applied at the same time. Escape clears the search; the result count and empty state update after each change.
- **Form:** The handler trims values, checks required fields, uses the browser's email validity, and applies minimum lengths. It marks invalid fields and focuses the first one. A successful submission shows a local demo confirmation; it does not transmit or retain the entered message.
- **Accessibility and media:** Search identifies the project grid with `aria-controls`; project images have descriptive alternatives. Project images use lazy loading and asynchronous decoding. CSS includes visible keyboard focus, responsive breakpoints, and a reduced-motion mode.

I should be able to explain these behaviors and point to the relevant code in `js/script.js`, `index.html`, and `css/styles.css`.

## Declaration — review and complete before submission

This is the student's personal attestation. Keep the date and signature only if the report includes all Assignment 2 AI use, the evidence archive submitted with it contains the complete unedited conversations and pre-edit artifacts, and I understand the submitted code. If any part is not true yet, remove the date and signature until the evidence and report are complete.

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.
>
> **Name:** Ahmed Alshareef  
> **ID:** 202359090  
> **Date signed:** 19/10/2026  
> **Signature/confirmation:** Ahmed Alshareef

## Evidence ZIP checklist

The required Blackboard archive should be named `202359090-ahmedalshareef-assignment2-ai-evidence.zip` and include:

```text
conversations/
  C01/                 # Complete, unedited export/record of this ChatGPT conversation
artifacts/
  A01-before-edits/    # AI-generated initial project draft, before my revisions
```

The current improved project is the post-edit version. Do not use it as the pre-edit artifact if it omits the earlier draft. Keep the evidence ZIP and conversation records out of the public GitHub repository. Do not replace the full conversation with this report or a summary. Follow the course's required conversation-export format; if account export takes too long, ask the instructor whether a complete, unedited transcript or screenshot sequence is acceptable.

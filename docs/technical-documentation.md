# Technical Documentation

## Architecture

This project is a static, client-side website. It uses semantic HTML for content and form controls, CSS custom properties for themes and layout, and a single deferred JavaScript file for interaction. There are no dependencies, build tools, third-party requests, cookies, or back-end services.

## File responsibilities

| File | Responsibility |
| --- | --- |
| `index.html` | Portfolio content, project metadata, filter controls, accessible form fields, and page landmarks. |
| `css/styles.css` | Theme tokens, responsive layouts, interactive states, motion, and focus indicators. |
| `js/script.js` | Theme persistence, project filtering and search, and contact form validation. |
| `assets/images/` | Images carried forward from Assignment 1. |

## Theme preference

The root `<html>` element has a `data-theme` attribute. CSS custom properties define the light palette and are overridden by `[data-theme="dark"]`. On startup, JavaScript reads the saved value from `localStorage`; if no valid saved value is present, it checks `prefers-color-scheme`. The theme button updates the data attribute, visible label, `aria-pressed` value, and browser toolbar theme color. Reads and writes are guarded because browsers can disable storage. The selected theme remains active for the current page view even if persistence fails.

## Project filtering and search

Each project article carries a `data-category` and normalized `data-search` string. A selected filter button updates the active category and its `aria-pressed` state. Search combines those keywords with the card's visible text, normalizes accents and punctuation, and matches every query word independently. Pressing Escape clears the search. Both controls call `updateProjects()`, which hides non-matching articles, updates the live project count, and reveals an empty state when needed. “Clear filters” resets both controls and returns keyboard focus to the search field. The project content is static markup, so it remains available if JavaScript fails to load.

## Form validation and feedback

The form uses explicit JavaScript validation so errors can be presented next to the relevant field. The script trims whitespace, checks required values, checks the browser's email validity, and enforces minimum text lengths. Invalid inputs receive `aria-invalid="true"`; the first invalid field receives focus after submission. A live status message summarizes the next action. A valid submission is confirmed as a local demo, the form clears, and the message counter resets. The form deliberately has no network request or message storage.

## Accessibility and responsive behavior

- A skip link and labeled navigation landmark support keyboard and assistive-technology users.
- Form labels, per-field error references, `aria-invalid`, and live status regions make controls and feedback easier to understand.
- Filter buttons expose selection through `aria-pressed`; the result count is announced politely.
- Visible keyboard focus is styled with `:focus-visible`.
- A reduced-motion media query minimizes animation and smooth scrolling when requested by the operating system.
- CSS Grid and Flexbox rearrange the hero, project cards, form, and header at 700px and 480px.

## Verification checklist

Run these checks in a current desktop and mobile browser before submission:

1. Change the theme, reload, and confirm the selection persists; also try in a private window or with storage blocked.
2. Select each project filter; search for `processor`, `sensor`, a mixed-case query, and a word with no match; test Escape and confirm counts and empty-state guidance.
3. Clear filters and confirm focus returns to search.
4. Submit the form empty, with a malformed email, with a short message, and with valid sample data. Confirm errors and success feedback are clear and no message is sent.
5. Navigate using only the keyboard and check the layout at narrow and wide widths. Enable reduced motion and confirm movement is minimized.
6. Check the browser console for errors and ensure all three image paths load.

These are steps for the student to run and record. Do not mark them complete unless you have performed them.

## Constraints

The form is a client-side interaction only. Theme persistence uses browser-local storage and is specific to this site on this browser. Project filters search the authored keywords, not image contents or a remote data source.

The supplied profile image is a generic placeholder from Assignment 1; replace it and its alternative text with your own chosen profile image before publishing.

# Genie · SAT Prep

A growing library of SAT Reading & Writing review lessons. Real questions, plain-English strategy, no nonsense.

Built by Haris · 2026

## Structure

- `index.html` — homepage
- `craft-and-structure.html` — Lesson 01 hub
  - `words-in-context.html`
  - `text-structure.html`
  - `cross-text.html`
- `expression-of-ideas.html` — Lesson 02 hub
  - `transitions.html`
  - `rhetorical-synthesis.html`
- `style.css` — shared design system
- `engine.js` — question/reveal/timer logic
- `questions-data.js` — all question content

## Editing

- **Fonts/colors:** edit `style.css` (CSS variables at the top)
- **Text content:** edit the relevant `.html` file
- **Questions:** edit `questions-data.js`

Live site auto-deploys via Netlify on every commit to main.

# Repository Guidelines

## Project Structure & Module Organization
- `index.html` drives the entire landing page; keep new sections wrapped in semantic `<section>` blocks and reuse existing containers.
- `styles.css` houses all styling; group additions near related commentary blocks and respect the CSS variable palette.
- `script.js` contains interaction logic (scroll observers, counters, form handling); modularize new behavior into named functions.
- Assets such as `logo.png` live at the repository root; optimize images before committing and reference with relative paths.
- Contributor onboarding references `README.md` and `SETUP_CHECKLIST.md`; update both when workflows change.

## Build, Test, and Development Commands
- Quick preview: `python -m http.server 8000` (run from the repo root, then open `http://localhost:8000`).
- Alternative static server: `npx serve . --listen 5000` for parity with production routing.
- Lint HTML/CSS via VS Code extensions or `npx prettier@latest --check "*.{html,css,js}"`; run `--write` before delivery when formatting drifts.

## Coding Style & Naming Conventions
- Use four-space indentation in HTML/CSS and two spaces in inline JavaScript blocks; favor `const`/`let` over `var`.
- HTML IDs stay camelCase when tied to script hooks; CSS classes remain lowercase-hyphen (e.g., `hero-container`).
- Keep functions under 40 lines, return early on validation errors, and document complex logic with concise comments.

## Testing Guidelines
- Manual smoke test critical flows: navigation anchors, IntersectionObserver animations, and the Formspree submission path.
- Validate across Chromium, Firefox, and Safari/iOS emulation at breakpoints defined in `styles.css` (640px, 768px, 1024px).
- Before pushing, inspect the console for warnings and run Lighthouse (Chrome DevTools) to confirm performance ≥90 and accessibility ≥95.

## Commit & Pull Request Guidelines
- Use Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`) with imperative subjects (e.g., `feat: add medication outcomes hero variant`).
- Scope each PR to one user-facing change; include a short summary, testing notes, and reference any related checklist items or issues.
- Attach screenshots or GIFs for visual tweaks and note any Formspree or DNS configuration updates affecting deploys.

## Security & Configuration Tips
- Never commit live Formspree endpoints or analytics keys; use placeholders and document replacements in `README.md`.
- Confirm GitHub Pages remains on HTTPS and re-run the checklist after updating DNS or adding third-party scripts.

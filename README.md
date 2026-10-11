# Bhavishya Priyadarshini Vijayaselvam, Portfolio

Static site: HTML5, CSS3 and vanilla JavaScript only. No build step, no backend.

## Structure
`index.html`, `css/style.css`, `js/script.js`, `assets/images/`, `assets/icons/`, `assets/resume.pdf`

## Add your resume
Place your resume PDF at **`assets/resume.pdf`** (exact name, lowercase). Both Download Resume buttons use this relative path.

## Edit content
All projects, experience, certifications and achievements are data arrays at the top of `js/script.js`. Add verified links (`src`, `live`) to a project to show link buttons; projects without them show a "Project overview" label. Dates are shown as supplied in the LinkedIn profile and resume; update "Present" entries when needed.

## Run locally
Open `index.html` in a browser, or run `python -m http.server` in this folder and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Create a repository (e.g. `portfolio`) on GitHub.
2. Upload the **contents** of this folder (so `index.html` is at the repository root), including `assets/resume.pdf`.
3. Go to Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
4. Open `https://<username>.github.io/<repository>/` after a minute or two.

All paths are relative, so the site works from a repository subpath.

## Troubleshooting
- Missing CSS/JS: check folder names are lowercase and match `css/style.css`, `js/script.js`.
- Resume 404: confirm the file is `assets/resume.pdf` and was committed.
- Old version showing: hard refresh (Ctrl+Shift+R).
- The contact form never sends data; it opens a prefilled `mailto:` message.

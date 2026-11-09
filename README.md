# Ziyi Pan's academic homepage

Personal academic website at [pytenter.github.io](https://pytenter.github.io/).

## Structure

- `index.html`: directly readable, semantic page content and manuscript metadata.
- `static/css/main.css`: layout, typography, responsive behavior, and print styles.
- `static/js/main.js`: optional mobile navigation, section highlighting, and figure viewer.
- `static/assets/research/`: optimized method and motivation figures from the manuscripts.

The site is static and requires no build step or runtime package installation. GitHub Pages serves the repository root. Existing root-level PNGs and the earlier ZIP remain available as historical assets.

## Preview

From this directory, run `python3 -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000`.

## Editing research

Each manuscript is an independent `<article class="paper-entry">` in `index.html`. Keep its title, author role, status, summary, image description, and details together. The order is LeaRSQ followed by TrajKV. Update status only when confirmed; a conference name in a source filename does not establish acceptance.

The current statuses are owner-confirmed: LeaRSQ is a completed first-author manuscript; TrajKV is submitted to ICASSP and lists Ziyi Pan as an equal-contribution co-first author. The LeaRSQ draft labels its numerical experiments as illustrative, so the homepage presents the method without numerical performance claims. TrajKV results include their model and comparison context.

Full manuscript PDFs are not included in this repository. Add a public paper link when one is available. Keep figure dimensions and alt text accurate when replacing images. Figure links work with JavaScript disabled; supported browsers enhance ordinary clicks into a dialog.

## Attribution

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the academic-template attribution. Research text, figures, and personal information retain their respective authors' rights.

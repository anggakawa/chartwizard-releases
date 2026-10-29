# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Jekyll, built by GitHub Pages' own action in `.github/workflows/pages.yml` and served at https://chart.codewizard.id (no base path). Liquid layouts (`_layouts/default.html`, `_layouts/doc.html`), one include for the download page (`_includes/home.html`), one stylesheet (`assets/site.css`), and a few lines of inline script (the sticky header's scrolled state, the feature tabs). No bundler, no framework, no npm dependencies.

Release data is not written by hand. On every push to `main`, every published release and on demand, `.github/scripts/release-data.mjs` asks the GitHub API for the newest release and writes `_data/release.json` (version, installer URL, size, date in WIB, SHA-256). The build fails if the newest release has no Windows installer, so a broken download button is never deployed. `.github/scripts/deploy-pages.mjs` deploys the built site under a commit made for that run. Both scripts have tests: `node --test .github/scripts/`.

## Users

Retail traders on the Indonesia Stock Exchange (IDX/BEI), mostly on Windows 10/11 PCs, some on Apple Silicon Macs. They read Indonesian first; some prefer English. They come from a link, a search or codewizard.id, and they want the app, not an essay. Inferred from the site's copy and the brief; not separately interviewed.

## Product Purpose

The repository holds Chartwizard's installers and its public documentation; it has no source code. This site is where a trader:

1. **Downloads** the app: Windows installer (newest release) or the macOS arm64 DMG, with version, size, date and SHA-256 in view.
2. **Installs** it past the unsigned-app warnings (SmartScreen, Gatekeeper) and picks a data provider.
3. **Decides on and activates Pro**: Free and Pro compared, Pro bought on Lynk.id (monthly or yearly), then activated in the app with the purchase email and the Lynk.id order ID (`ACTIVATE-PRO.md`).
4. **Learns the app** from the tutorials (`TUTORIALS-ID.md`, `TUTORIALS.md`): first sync, reading a chart, indicators, drawings, the Scanner, the Screener and sector rotation (Pro), backup and restore, shortcuts, troubleshooting.

Success means the download starts on the first click, the warning screens do not scare anyone off, and a buyer gets from a Lynk.id receipt to an active licence without writing to support.

## Positioning

A product page and a manual for one desktop app, not a studio site and not a trading service. It shows what the app really does (real screenshots, a real chart, one real day of scanner results) and says plainly that Chartwizard is charting software, not investment advice. It sits under codewizard.id and shares its visual system, but speaks only for Chartwizard.

## Operating Context

Visitors arrive on a phone as often as on a PC, often to read the guide or find an order ID while the app is open elsewhere. Downloads happen on the PC. GitHub Releases hosts the installers; Lynk.id handles payment; the app's licence server checks the order. This site links to all three and changes none of them.

## Capabilities and Constraints

- Two languages from one template. Indonesian is the default at `/` (`index.html`), English at `/en/` (`en/index.html`). Every string on the download page lives in `_data/i18n.yml` under `id` and `en`; strings may hold HTML, and `%file%` becomes the installer's name.
- The guides stay plain Markdown so they read on GitHub too. `_config.yml` gives each its layout, language and other-language link. `ACTIVATE-PRO.md` holds both languages on one page (Indonesian first, then `#english`).
- Download links, release data, Lynk.id product links and the activation steps are content owned outside the design. A design change must not edit them.
- The site does not print Pro prices; they are on the Lynk.id product pages.
- Screenshots in `images/` are captures of the real app. Do not fabricate, retouch or recolour them.
- `DESIGN.md`, `PRODUCT.md` and `README.md` are excluded from the build.

## Brand Commitments

- The name is Chartwizard, one word. The studio is Codewizard (codewizard.id). Neither is CODE WIZARD INC or Code Wiz.
- The app icon (`assets/logo.svg`) is used as it is.
- Visual direction: the Codewizard system (paper `#fcfcfb`, ink `#1a1a1a`, caption `#4a4a4a`, hairline `#e6e6e4`, square corners, Instrument Sans), applied on 2026-10-29. The app's own dark theme and colours stay inside its screenshots.
- The footer states that Chartwizard is charting software, not investment advice.

## Design System

Recorded in `DESIGN.md`; applied through custom properties at the top of `assets/site.css`. The two must stay in step.

Color: `--color-paper`, `--color-ink`, `--color-secondary`, `--color-rule`, `--color-hover`, `--color-select`, `--color-dust`, `--color-faint`. No hue token.

Type: `--font-sans` (Instrument Sans, self-hosted in `assets/fonts/`), `--font-code` (system monospace, literal text only), `--font-size-display`, `--font-size-headline`, `--font-size-title`, `--font-size-lead`, `--font-size-body`, `--font-size-nav`, `--font-size-label`, `--font-size-small`, `--font-size-mark`, `--font-weight-regular`, `--font-weight-semibold`, `--line-height-*`, `--letter-spacing-*`.

Spacing: `--space-1` through `--space-10`, `--space-sheet-x`, `--space-section`, `--space-gutter`, `--height-header`, `--measure-doc`.

Radius: `--radius-none` is `0`.

Motion: `--ease-arrive`, `--ease-leave`, `--ease-swap`, `--duration-*`. The hero chart prints once on load; the scanner strip drifts; links share the `.garis` underline wipe. `prefers-reduced-motion` turns all of it off.

## Evidence on Hand

- Real app screenshots: `images/app-chart.webp`, `app-scanner.webp`, `app-screener.webp`, `app-sectors.webp` (1440×900).
- Real guide pictures: `images/lynk-receipt.png`, `images/settings-licence.png`.
- A real chart snapshot (`_includes/hero-chart.svg`) and one day's scanner results (`_data/scanner_sample.yml`), both generated from the app's data.
- Release facts come from GitHub Releases at build time.
- Absence: no user counts, reviews or testimonials. Do not add any.

## Product Principles

- The download is the first and the last thing on the page.
- Show the real app; never a mock-up.
- Say plainly why Windows and macOS warn, and how to check the file.
- Every string in both languages, from one place.
- The guides work on GitHub and on the site.

## Accessibility & Inclusion

Readable without JavaScript: the feature tabs fall back to all four screenshots in a row, the header is frosted from the start, and every link works. Keyboard: the tabs follow the ARIA tab pattern (arrows, Home, End); focus is a 2px `currentColor` ring. Every screenshot has a descriptive alt text in both languages; the hero chart has a title. Status and bias never depend on colour alone. Layouts hold at 375px with no sideways scroll. Reduced motion is honoured throughout.

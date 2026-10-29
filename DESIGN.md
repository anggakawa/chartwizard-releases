---
name: Chartwizard
description: Download site for Chartwizard in the Codewizard system. Monochrome paper and ink around the app's own screenshots.
colors:
  paper: "#fcfcfb"
  ink: "#1a1a1a"
  caption: "#4a4a4a"
  dust: "#2a2a2a"
  faint: "#b4b4b1"
  hairline: "#e6e6e4"
  row-wash: "#f3f3f1"
  selection: "#e8e8e6"
typography:
  headline:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.4rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.2rem, 2vw, 1.45rem)"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  small:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  code:
    fontFamily: "ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.875em"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "7": "2rem"
  "8": "2.5rem"
  "9": "3rem"
  "10": "4rem"
  sheet-x: "clamp(1.25rem, 4vw, 3.5rem)"
  section: "clamp(4rem, 8vw, 6.5rem)"
  header: "4.5rem"
  doc-measure: "46rem"
components:
  download-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3.25rem"
  download-button-hover:
    backgroundColor: "{colors.dust}"
  secondary-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "2.75rem"
  secondary-button-hover:
    backgroundColor: "{colors.row-wash}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.25rem"
  pro-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
  plan-card:
    backgroundColor: "{colors.paper}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "2rem"
  plan-card-pro:
    borderColor: "{colors.ink}"
  screenshot-window:
    backgroundColor: "{colors.paper}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
  faq-row-hover:
    backgroundColor: "{colors.row-wash}"
---

# Design System: Chartwizard

## Overview

**Creative North Star: "The Chart in One Ink"**

The download page for Chartwizard, set on the same almost-white paper as codewizard.id. The name of the job sits large on the left: IDX Chart Automatic Setup. Under it, one paragraph in caption gray, then the download. On the right, BBCA's daily chart as the app drew it, with the double bottom it found, printed in soft black: rising candles hollow, falling candles solid. Under the hero, one day's scanner results drift past on a hairline strip.

Further down, real screenshots of the app sit in plain hairline frames. They are the only colour on the page, and they are the product, not decoration. Then the install steps, Free and Pro side by side, questions, and one more way to the download. The tutorials and the Pro activation guide use the same paper, the same left edge, and the same type.

The palette is paper, ink, and gray. Corners stay square. Instrument Sans does every job except literal text you type or compare.

**Key Characteristics:**

- Paper from the header to the footer, on every page; no second field colour
- One filled shape: the download button
- The hero chart redrawn in one ink; status and bias told by fill, outline and strike-through, not hue
- The app's screenshots and icon keep their own colours
- Square corners, hairline rules, one type family
- Indonesian at `/`, English at `/en/`; one template for both

## Colors

Black, white, and the grays between them. Hue does not carry meaning anywhere in the interface.

### Primary

There is no chromatic primary. Paper (`#fcfcfb`, `--color-paper`) is the field. Ink (`#1a1a1a`, `--color-ink`) is the type, the chart, the download button and the Pro badge.

### Neutral

- **Paper** (`#fcfcfb`, `--color-paper`): The whole page, including the hero, the plans, the closer and the guides. Also the text on ink.
- **Ink** (`#1a1a1a`, `--color-ink`): Headings, body text, buttons, the candles and the pattern, the Pro badge, the Pro plan's border. Focus rings use `currentColor`.
- **Caption** (`#4a4a4a`, `--color-secondary`): The hero paragraph, labels in the release row, captions under the screenshots, step bodies, the footer, the invalidation level on the chart.
- **Dust** (`#2a2a2a`, `--color-dust`): The download button under the pointer.
- **Faint** (`#b4b4b1`, `--color-faint`): Volume bars, the outline of a forming setup, the dash for a feature Free does not have.
- **Hairline** (`#e6e6e4`, `--color-rule`): Rules over section heads, between rows, around the chart card, screenshots and plans, and above the footer.
- **Row wash** (`#f3f3f1`, `--color-hover`): A question row or secondary button under the pointer; the background of code and of the warning notes.
- **Selection** (`#e8e8e6`, `--color-select`): Text selection.

### Named Rules

**The Monochrome Rule.** Do not introduce a hue in the interface. Gray is the only secondary tone. A link is underlined, not recoloured. The rule covers the UI around the content: the app's screenshots (`images/app-*.webp`), the pictures in the guides (`images/lynk-receipt.png`, `images/settings-licence.png`) and the app icon (`assets/logo.svg`) are the product as it really looks, and are shown as they are. Do not tint, desaturate or recolour them.

Where the app uses colour to mean something, the page uses fill instead:

| Meaning | In the app | On this page |
|---|---|---|
| Rising / falling candle | green / red | hollow / solid ink |
| Bullish / bearish setup | green / red dot | hollow / solid square |
| Forming | amber | faint outline, caption text |
| Confirmed | blue | ink outline |
| Breakout | green | solid ink, paper text |
| Failed | gray | caption text, struck through |
| Pro | amber | ink badge, paper text |

## Typography

**Display Font:** Instrument Sans (Segoe UI, sans-serif), self-hosted at `assets/fonts/instrument-sans-latin.woff2` under the SIL Open Font License (`assets/fonts/OFL.txt`) and preloaded by the layout.
**Body Font:** Instrument Sans
**Code Font:** the system monospace (`--font-code`), only for literal text: the installer's file name, commands, paths and the SHA-256.

**Character:** One modern grotesque, weights 400 and 600. The hero line is large and tightly tracked. Section heads are smaller and still tight. Body copy is caption gray where it explains and ink where it instructs. Numbers that line up (prices in the chart, the release row, the scanner date) use tabular figures.

### Hierarchy

- **Headline** (600, `clamp(2.2rem, 6vw, 3.6rem)`, line-height 0.96): The hero line and the title of each guide.
- **Title** (600, `clamp(1.8rem, 3vw, 2.4rem)`, line-height 1.12): Section heads on the download page, the closer's “Chartwizard”.
- **Lead** (600, `clamp(1.2rem, 2vw, 1.45rem)`): Feature titles in the tour, platform heads in the install section, plan names, the second-level heads in the guides.
- **Body** (400, `1.0625rem`, line-height 1.55): Paragraphs; the guides open up to line-height 1.7.
- **Label** (400, `0.875rem`): Nav, buttons, chart legend, plan rows, notes, the footer.
- **Small** (400, `0.75rem`): Release-row labels, status pills, the scanner strip's head, the window bar.

### Named Rules

**The One Face Rule.** Do not add a serif or a monospace costume. Monospace appears only where the reader types or compares the text character by character.

## Layout

Every page uses one left edge: `--space-gutter`, which is `--space-sheet-x` on a narrow screen and the inset that keeps a 76rem measure centred on a wide one. The header, the hero copy, each section and each guide start on it.

The download page, top to bottom: header; hero (copy left, chart card right from 1081px, stacked below); the scanner strip across the full width; Features; How to install (Windows, then macOS, three steps each); Free and Pro; Questions; the closer; the footer. Each section head sits under a hairline, padded by `--space-section`.

The guides are one column, `--measure-doc` (46rem) wide, on the same left edge. Second-level heads sit under a hairline.

At 640px and below the nav moves to its own row under the wordmark, buttons in the hero, plans and closer go full width, the release row folds to two columns, and the pattern card drops under the chart instead of overlapping it. Nothing scrolls sideways at 375px except a wide table in a guide, inside its own box.

## Elevation & Depth

No drop shadows. Cards, windows and buttons do not lift. The only depth is the frosted header once the page scrolls.

### Shadow Vocabulary

None.

### Named Rules

**The Flat Row Rule.** Hover washes the row. It does not raise it. Question rows and secondary buttons take the row wash; the download button goes from ink to dust.

## Shapes

`--radius-none` is `0`. Buttons, badges, status pills, step numbers, the language switch, the chart card, plans, screenshot frames and focus rings are square. The only curves are the chart's pattern points and the corners of the app icon, which is content.

## Components

### Buttons

- **Download** (`.btn-primary`): The one filled shape. Ink with paper text, square, at least 3.25rem tall in the hero and the closer, with a download arrow. Hover goes to dust; pressed fades to opacity 0.65. The Windows button points at the newest installer from `_data/release.json`; never edit that link by hand.
- **Secondary** (`.btn-secondary`): Ink outline on paper: Download for Mac, the guide, the Free plan's download, the yearly Pro link. Hover washes.
- **Text link** (`.garis`): Ink with a 1px underline that leaves to the right and returns from the left on hover. Used for “All versions”, “Check the SHA-256”, the activation link under Pro and the footer link. Links inside the guides are plain underlines.
- **Focus:** 2px `currentColor` outline, 3px offset.

### Navigation

Logo and wordmark, then Download, Guide and Activate Pro. Each nav link is at least 2.75rem tall; hover draws a 1px underline from the left, and the current page keeps it. The language switch on the right is two square cells: the current language in ink with paper text, the other a link that washes on hover. The header is sticky; once the page scrolls it gains `rgb(252 252 251 / 0.82)`, a 14px backdrop blur and a hairline. Without JavaScript it has them from the start.

### Hero chart card

`_includes/hero-chart.svg`: BBCA, daily, with the double bottom Chartwizard found, generated from the app's data. The card is paper in a hairline frame. The legend shows the symbol, name, OHLC and change in ink and caption gray. The pattern line is 2.4px ink; its three points are paper circles with an ink ring; the neckline is a dashed ink line; invalidation is a dotted caption-gray line; the last price is an ink tag with paper figures. Volume is faint. The pattern card overlaps the chart's lower edge on a wide screen, outlined in ink, and sits under the chart on a phone.

On load the candles print from the left, the pattern traces, its points pop, the levels fade in, then the pattern card rises. All of it is CSS, and all of it is off for reduced motion.

The animated candlestick band from codewizard.id (`chart.js`) is not used here. It is abstract on purpose, and this card is real data that its legend, pattern card and alt text describe; swapping it would leave those describing a chart that is not there.

### Scanner strip

One day's real setups from `_data/scanner_sample.yml`, between two hairlines, scrolling left in 70s and pausing under the pointer. Each item: code in ink, a bias square (hollow bullish, solid bearish), the pattern name in caption gray, and a status pill.

### Feature tour

Four tabs (Chart, Scanner, Screener, Sectors), each showing a real screenshot at 1440×900 in a hairline window frame with a thin title bar. Tabs are text; the selected one is ink, semibold and underlined. Arrow keys, Home and End move between them. Without JavaScript the tabs hide and all four screenshots show one after another. Pro features carry the ink Pro badge.

### Install steps

Two platforms, three steps each, on one hairline rail. The step number is a square: outlined in ink, or filled in ink for a step that warns (SmartScreen, Gatekeeper). A warning's note sits on the row wash with a 2px ink rule on the left. The text of these steps lives in `_data/i18n.yml` and is not changed for design.

### Plans

Free and Pro side by side, one column on a phone. Free has a hairline border; Pro has an ink border and the Pro badge as its name. Each row is a hairline-separated line with an ink check, or a faint dash where Free does not have the feature. Pro's buttons go to the two Lynk.id products; the note under them links to the activation guide. Prices are not printed on this page.

### Questions

The heading holds the left column on a wide screen. Each question is a `<details>` row between hairlines, with a square-cornered chevron that turns when open. The SHA-256 check is the last row, with the hash and the PowerShell command in the code face. A link to `#verify` opens it.

### Guides

`TUTORIALS-ID.md`, `TUTORIALS.md` and `ACTIVATE-PRO.md` stay plain Markdown, so GitHub shows them too; `_config.yml` gives them the `doc` layout, their language and the link to the other language. On the site the title is a headline, second-level heads sit under a hairline, tables have hairline rows with an ink rule under the head, and pictures sit in a hairline frame at their own size. Code is on the row wash.

### Motion

The header fades in. The hero chart prints and traces once. The scanner strip drifts. Links share one underline wipe. Tour panels fade in when switched. Question rows wash under the pointer. `prefers-reduced-motion` turns all of it off, stops the strip (it becomes a scrollable row) and shows everything in place.

## Do's and Don'ts

### Do:

- **Do** add strings to both `id` and `en` in `_data/i18n.yml`, never to the template.
- **Do** show new app screenshots as they are, in the same hairline window frame.
- **Do** tell a state by fill, outline or strike-through when the app tells it by colour.
- **Do** keep every page on the one left edge, from header to footer.
- **Do** check both `/` and `/en/` at 375px after a layout change.

### Don't:

- **Don't** add a colour accent, a gradient fill, a glow or a drop shadow to the interface.
- **Don't** recolour, tint or crop the screenshots or the app icon to fit the palette.
- **Don't** add a second filled button; the download is the only one.
- **Don't** put a second field colour behind a section.
- **Don't** change download links, release data, prices, or the Lynk.id and activation instructions for a design change.
- **Don't** invent features, screenshots or numbers the app does not have.

# Chartwizard tutorials

Short walkthroughs for each part of the app. Labels in **bold** are what you see on screen.

- [1. First start: get the data](#1-first-start-get-the-data)
- [2. Read a chart](#2-read-a-chart)
- [3. Add indicators](#3-add-indicators)
- [4. Draw on the chart](#4-draw-on-the-chart)
- [5. Find setups with the Scanner](#5-find-setups-with-the-scanner)
- [6. Screen stocks (Pro)](#6-screen-stocks-pro)
- [7. Follow sector rotation (Pro)](#7-follow-sector-rotation-pro)
- [8. Activate Pro](#8-activate-pro)
- [9. Back up and restore](#9-back-up-and-restore)
- [Keyboard shortcuts](#keyboard-shortcuts)
- [Troubleshooting](#troubleshooting)

## 1. First start: get the data

Chartwizard keeps the market data on your PC, so it needs one sync before the charts fill.

1. Open **Settings → Data provider**.
2. Pick a provider:
   - **Yahoo Finance** needs no token. Choosing it starts a sync.
   - **EODHD** needs your own API token. Paste it into **EODHD API token** and choose **Save**; saving starts a sync.
     The token is stored encrypted on your PC.
3. Wait for the first sync to finish. The bottom status bar shows its progress and result.

After that the app syncs by itself on weekdays after the market closes, at 17:00 WIB unless you change it under
**Settings → Auto-sync**. To sync now, choose **Sync now** in the bottom status bar. With Pro, a **Sync now** during
market hours also adds today's live bar (about 15 minutes delayed), which the chart draws hollow.

## 2. Read a chart

1. Open the **Chart** tab. It starts on the IHSG index (`JKSE.INDX`).
2. Type a code or a company name in the search box at the top, then press **Enter** or click a result.
   **Esc** clears the box.
3. Choose **1D** for daily bars or **1W** for weekly bars.
4. Scroll to zoom and drag to move through history. **Alt+R** resets the view.

The chart has three panes: price, volume and RSI (with dashed 70/30 lines). The legend at the top left follows your
mouse and shows the open, high, low, close, change, volume and RSI for that bar.

**Patterns.** Chartwizard finds patterns on its own and draws them on the price pane. The toolbar controls which ones show:

- **Classic**, **S/R**, **Candles** and **Divergence** switch each kind of pattern on or off.
- **Recent** shows patterns that ended in the last 120 bars, and **All** shows every pattern in the history.
- **Score ≥** hides patterns below a score (0 to 1).
- **Reversal + conf.** keeps only reversal patterns with a confirmation.
- **Unusual vol** marks bars whose volume is 2.5× the 20-day average: orange for absorption (a small body), blue for a
  strong close.
- **Adjusted** shows prices adjusted for splits and dividends (on by default).

The **Patterns** list on the right shows each pattern's status, end date, score, **Target** and **Invalid.** level.
Click one to zoom the chart to it.

**Watchlist.** Choose **+** next to **Watchlist** to add the open stock, and click an entry to open it again.

**Themes.** Click the palette button at the top right, or open **Settings → Appearance**, to change the app's colours:
**Midnight** (the default dark look), **High contrast**, **Daylight** (white), **Washi** (soft Japanese colours),
**Sakura** (pastels) and **Colorblind** (blue up, orange down). Below the themes, **Candle outline** puts a black
**Thin** or **Bold** outline around every candle. Both choices apply at once and are remembered.

## 3. Add indicators

1. Choose **Indicators** in the chart toolbar.
2. Search by name, or browse the categories: **Moving averages**, **Trend**, **Volatility**, **Momentum**, **Volume** and
   **Fibonacci**.
3. Click an indicator to add it. The dialog stays open, so you can add several; press **Esc** or **Close** when done.

Available indicators include moving averages (simple, exponential, multiple and volume-weighted), Supertrend, DMI,
Bollinger Bands, Donchian Channels, ATR, MACD, Stochastic, OBV, Accumulation/Distribution, Chaikin Money Flow, MFI,
Anchored VWAP, Auto Fib Retracement, Auto Fib Extension and Golden Pocket.

Each indicator gets a row in the legend with three buttons:

- **Show** / **Hide** toggles it.
- **Settings** opens its inputs (periods and so on) and its **Style** tab, where you can change each line's colour,
  thickness and style (**Solid**, **Dashed**, **Dotted**). **Defaults** restores the original settings.
- **Remove** takes it off the chart.

Your indicators are remembered the next time you open the app.

## 4. Draw on the chart

The drawing tools are on the left edge of the chart:

| Tool | How to draw |
|---|---|
| **Trend line**, **Ray** | Click two points, or press, drag and release |
| **Horizontal line**, **Horizontal ray** | Click once |
| **Fib retracement** | Click two points |
| **Trend-based fib extension** | Click three points |
| **Rectangle**, **Price range** | Click two corners |

- **Magnet** (on by default) snaps each point to the nearest open, high, low or close.
- Click a drawing to select it, and drag to move it. **Delete** or **Backspace** removes the selected drawing.
- **Esc** cancels a drawing in progress, then returns to **Cursor**.
- The selected drawing shows its points' prices on the price axis and their dates on the time axis.
- **Fib retracement** and **Trend-based fib extension** draw TradingView's levels, with each band shaded.
- **Hide drawings** hides them without deleting them. **Remove all drawings** deletes every drawing on this stock, after
  asking you to confirm.

Drawings are saved for each stock separately.

## 5. Find setups with the Scanner

The Scanner lists every live pattern across all IDX stocks.

1. Open the **Scanner** tab and pick the **Timeframe** (**1D** or **1W**).
2. Narrow the list:
   - **Kind**, **Bias** (Bullish, Bearish, Neutral) and **Status** (Forming, Confirmed, Breakout, Failed).
   - **Patterns**: tick specific patterns to show only those.
   - **Min score**: hide weaker setups.
   - **Confluence**: **With confirmation** or **Reversal + confirmation**.
   - **Avg value 20d ≥**: skip illiquid stocks by their average daily trading value, in billions of rupiah.
   - **Vol vs 20d ≥**: today's volume against its 20-day average. Try **2.5** to find fresh volume spikes.
3. Click a column heading to sort, for example by **Score**.
4. Click a row to open that stock on the Chart tab, on the same timeframe, zoomed to the setup.

**Reset filters** returns to the defaults. With Pro, **Export CSV** saves the list as a spreadsheet file.

On the free plan the Scanner shows the top 5 setups that pass the default filters; the row below them says how many
more there are.

## 6. Screen stocks (Pro)

The Screener filters every stock by price, returns, trend, volume and fundamentals.

1. Open the **Screener** tab and pick a ready-made screen under **Preset**, for example **Top Gainers**,
   **Unusual Volume**, **Near 52-Week High**, **Low P/E** or **High Dividend Yield**.
2. To build your own, choose **Create screener**, or **Edit** on a preset:
   - Give it a **Name** and a **Description**.
   - Under **Filters**, choose **Add filter**, pick a metric, choose **at least** or **at most** and enter a value.
     A stock must pass every filter.
3. Choose **Metrics** to pick the columns, and click a column heading to sort.
4. Choose **Save as new** to keep your screen; it then appears under **Saved**. **Save** updates a saved screen.
5. Click a row to open the stock on the Chart tab.

## 7. Follow sector rotation (Pro)

The Sectors tab shows which sectors are gaining or losing strength against IHSG. It needs sector data, which EODHD
provides and Yahoo Finance does not.

1. Open the **Sectors** tab. Choose **Daily** or **Weekly** (the default) for the graph, and a **Liquidity ≥** level
   to leave out thinly traded stocks.
2. Read the graph (a relative rotation graph). Each sector sits in one of four corners:
   - **Leading**: stronger than IHSG and still gaining.
   - **Weakening**: stronger than IHSG but losing momentum.
   - **Lagging**: weaker than IHSG and still losing.
   - **Improving**: weaker than IHSG but gaining momentum.

   Sectors tend to rotate clockwise through these corners. **How to read this** explains it in the app.
3. The table on the right has two views:
   - **Rotation**: each sector's quadrant, strength against the market and momentum.
   - **Returns**: 1D to 1Y returns, **Absolute** or **vs IHSG**.
4. Click a sector on the graph or in the table to list its stocks, with their returns and their strength against IHSG
   and against the sector. Click a stock to open its chart.

## 8. Activate Pro

The step-by-step guide with pictures, in Indonesian and English, is [how to activate Pro](ACTIVATE-PRO.md).

1. Buy Pro on Lynk.id: [monthly](https://lynk.id/codewizard/0j4z82e188gn) or
   [yearly](https://lynk.id/codewizard/jr2qg5k48m85).
2. In Chartwizard, open **Settings → Licence**.
3. Enter the **Email used to pay** and the **Order ID** from your Lynk.id receipt, and choose **Activate**.
   If you just paid, wait a minute and try again.
4. Once active, the section shows your **Licence key**. Choose **Copy** and keep it.

**Second PC.** One licence covers 2 PCs. On the second PC, enter the same email and order ID, or paste the licence key
under **Licence key** and choose **Activate with key**.

**Third PC.** If both seats are taken, the app lists your PCs with when each was last seen. Choose **Release** on one you
no longer use to free its seat.

**Renew.** Buy again with the same email, then choose **Refresh** in **Settings → Licence**.

## 9. Back up and restore

- **Settings → Database → Back up…** saves a copy of your data where you choose.
- **Restore…** replaces the data with a backup you pick, and the app restarts.

Your data lives in `%APPDATA%\idx-chart`. Uninstalling keeps it, so reinstalling picks up where you left off.

## Keyboard shortcuts

| Key | What it does |
|---|---|
| **Enter** | In the search box, opens the stock. In a table, opens the row. |
| **Esc** | Cancels a drawing, returns to the cursor, clears the search box or closes a dialog |
| **Delete** / **Backspace** | Removes the selected drawing |
| **Alt+R** | Resets the chart view |

## Troubleshooting

- **Windows says the app is unrecognised.** The installer is not code-signed yet. Choose **More info → Run anyway**.
- **Charts and lists are empty.** No sync has finished yet. Set a provider in **Settings → Data provider**, then choose
  **Sync now** in the status bar.
- **The Sectors tab says there is no sector data.** Yahoo Finance has none; switch to EODHD in **Settings → Data provider**.
- **Activation says the order was not found.** Check that the email is the one you paid with and that the order ID
  matches your Lynk.id receipt exactly. If you just paid, wait a minute. If it still fails, choose **Contact support** in
  **Settings → Licence**.
- **Patterns look wrong after changing thresholds.** **Settings → Pattern cache → Rebuild pattern cache** scans again.

Chartwizard is charting software, not investment advice.

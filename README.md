# Chartwizard

Charting and pattern scanning for stocks on the Indonesia Stock Exchange (IDX), for Windows.

**[Download the latest version](https://github.com/anggakawa/chartwizard-releases/releases/latest)**: open the page and
download `Chartwizard-Setup-<version>.exe` from its Assets.

New to the app? Read the [tutorials](TUTORIALS.md).

This repository holds the installers only; it has no source code.

## Install

1. Run the installer. It is not code-signed yet, so Windows SmartScreen may warn about it: choose **More info → Run anyway**.
2. Open **Settings → Data provider** and pick a provider. Yahoo Finance needs no token; EODHD needs your own API token.
   The first sync then downloads the price history.

Needs Windows 10 or 11, 64-bit. Each release lists the installer's SHA-256 so you can check your download:

```powershell
Get-FileHash .\Chartwizard-Setup-<version>.exe -Algorithm SHA256
```

## Free and Pro

| | Free | Pro |
|---|---|---|
| Chart: indicators, drawings, pattern and level overlays | Yes | Yes |
| Daily auto-sync | Yes | Yes |
| Scanner | The top 5 setups | Every setup and filter |
| Screener and Sectors | | Yes |
| CSV export | | Yes |
| Live intraday bars | | Yes |

Buy Pro on Lynk.id: [monthly](https://lynk.id/codewizard/0j4z82e188gn) or [yearly](https://lynk.id/codewizard/jr2qg5k48m85).
One licence covers 2 PCs.

**Activate:** in Chartwizard, open **Settings → Licence** and enter the email you paid with and the order ID from your
Lynk.id receipt. To renew, buy again with the same email, then choose **Refresh** there. Step by step, with pictures: [how to activate Pro](ACTIVATE-PRO.md).

## Update

Download the new installer and run it over the old one. Your data and licence stay in `%APPDATA%\idx-chart`, and
uninstalling keeps that folder too.

---

## Bahasa Indonesia

**[Unduh versi terbaru](https://github.com/anggakawa/chartwizard-releases/releases/latest)**, lalu jalankan
`Chartwizard-Setup-<versi>.exe`. Jika Windows SmartScreen memperingatkan, pilih **More info → Run anyway**.

Untuk Pro: beli di Lynk.id ([bulanan](https://lynk.id/codewizard/0j4z82e188gn) atau
[tahunan](https://lynk.id/codewizard/jr2qg5k48m85)), lalu buka **Settings → Licence** dan masukkan email pembayaran
serta order ID dari struk Lynk.id. Satu lisensi untuk 2 PC. Panduan lengkap dengan gambar: [cara mengaktifkan Pro](ACTIVATE-PRO.md).

Chartwizard adalah perangkat lunak grafik, bukan nasihat investasi. / Chartwizard is charting software, not investment advice.

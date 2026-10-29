# Panduan Chartwizard

Panduan singkat untuk setiap bagian aplikasi. Label yang **tebal** adalah tulisan yang kamu lihat di layar; label itu
dibiarkan dalam bahasa Inggris, sama seperti di aplikasi. [English version](TUTORIALS.md).

- [1. Mulai pertama: ambil data](#1-mulai-pertama-ambil-data)
- [2. Membaca grafik](#2-membaca-grafik)
- [3. Menambah indikator](#3-menambah-indikator)
- [4. Menggambar di grafik](#4-menggambar-di-grafik)
- [5. Mencari setup dengan Scanner](#5-mencari-setup-dengan-scanner)
- [6. Menyaring saham (Pro)](#6-menyaring-saham-pro)
- [7. Mengikuti rotasi sektor (Pro)](#7-mengikuti-rotasi-sektor-pro)
- [8. Mengaktifkan Pro](#8-mengaktifkan-pro)
- [9. Mencadangkan dan memulihkan data](#9-mencadangkan-dan-memulihkan-data)
- [Pintasan keyboard](#pintasan-keyboard)
- [Mengatasi masalah](#mengatasi-masalah)

## 1. Mulai pertama: ambil data

Chartwizard menyimpan data pasar di PC kamu, jadi perlu satu kali sinkronisasi sebelum grafiknya terisi.

1. Buka **Settings → Data provider**.
2. Pilih penyedia data, lalu setujui pemberitahuan sumber datanya. Pemberitahuan ini muncul sekali per penyedia; sebelum
   kamu setuju, Chartwizard tidak mengunduh apa pun darinya. Data diambil dari penyedia itu ke PC kamu, di bawah
   perjanjianmu sendiri dengan penyedia tersebut. Chartwizard tidak menjual data dan tidak berafiliasi dengan Yahoo
   maupun EODHD.
   - **Yahoo Finance** tidak perlu token, tetapi **eksperimental, gratis, dan bisa putus**: sumber tidak resmi yang
     bisa berubah atau berhenti kapan saja. Memilihnya langsung memulai sinkronisasi.
   - **EODHD** memakai API token milikmu sendiri. Tempel token di **EODHD API token** lalu pilih **Save**; menyimpan
     token langsung memulai sinkronisasi. Token disimpan terenkripsi di PC kamu.
3. Tunggu sinkronisasi pertama selesai. Bilah status di bagian bawah menampilkan progres dan hasilnya.

Setelah itu aplikasi menyinkronkan data sendiri setiap hari kerja setelah pasar tutup, pukul 17:00 WIB kecuali kamu
mengubahnya di **Settings → Auto-sync**. Untuk menyinkronkan sekarang, pilih **Sync now** di bilah status bawah. Dengan
Pro, **Sync now** saat jam bursa juga menambahkan bar live hari ini (tertunda sekitar 15 menit), yang digambar berongga
di grafik.

## 2. Membaca grafik

1. Buka tab **Chart**. Tab ini dibuka di indeks IHSG (`JKSE.INDX`).
2. Ketik kode atau nama perusahaan di kotak pencarian di atas, lalu tekan **Enter** atau klik salah satu hasil.
   **Esc** mengosongkan kotak pencarian.
3. Pilih **1D** untuk bar harian atau **1W** untuk bar mingguan.
4. Scroll untuk memperbesar dan seret untuk bergerak di sepanjang riwayat. **Alt+R** mengembalikan tampilan.

Grafik punya tiga panel: harga, volume dan RSI (dengan garis putus-putus di 70/30). Legenda di kiri atas mengikuti
mouse dan menampilkan open, high, low, close, perubahan, volume dan RSI untuk bar tersebut.

**Pola.** Chartwizard menemukan pola sendiri dan menggambarnya di panel harga. Toolbar mengatur pola mana yang tampil:

- **Classic**, **S/R**, **Candles** dan **Divergence** menyalakan atau mematikan setiap jenis pola.
- **Recent** menampilkan pola yang berakhir dalam 120 bar terakhir, dan **All** menampilkan semua pola di seluruh
  riwayat.
- **Score ≥** menyembunyikan pola di bawah skor tertentu (0 sampai 1).
- **Reversal + conf.** hanya menampilkan pola pembalikan yang sudah terkonfirmasi.
- **Unusual vol** menandai bar yang volumenya 2,5× rata-rata 20 hari: oranye untuk absorpsi (badan candle kecil),
  biru untuk penutupan kuat.
- **Adjusted** menampilkan harga yang disesuaikan dengan stock split dan dividen (aktif secara bawaan).

Daftar **Patterns** di kanan menampilkan status setiap pola, tanggal berakhirnya, skor, level **Target** dan
**Invalid.**. Klik salah satu untuk memperbesar grafik ke pola itu.

**Watchlist.** Pilih **+** di sebelah **Watchlist** untuk menambahkan saham yang sedang dibuka, lalu klik entrinya untuk
membukanya lagi.

**Tema.** Klik tombol palet di kanan atas, atau buka **Settings → Appearance**, untuk mengganti warna aplikasi:
**Midnight** (tampilan gelap bawaan), **High contrast**, **Daylight** (putih), **Washi** (warna Jepang yang lembut),
**Sakura** (pastel) dan **Colorblind** (biru naik, oranye turun). Di bawah daftar tema, **Candle outline** memberi garis
tepi hitam **Thin** atau **Bold** di setiap candle. Keduanya langsung berlaku dan tetap tersimpan.

## 3. Menambah indikator

1. Pilih **Indicators** di toolbar grafik.
2. Cari berdasarkan nama, atau telusuri kategorinya: **Moving averages**, **Trend**, **Volatility**, **Momentum**,
   **Volume** dan **Fibonacci**.
3. Klik indikator untuk menambahkannya. Dialognya tetap terbuka, jadi kamu bisa menambah beberapa sekaligus; tekan
   **Esc** atau **Close** jika sudah selesai.

Indikator yang tersedia antara lain moving average (simple, exponential, multiple dan volume-weighted), Supertrend, DMI,
Bollinger Bands, Donchian Channels, ATR, MACD, Stochastic, OBV, Accumulation/Distribution, Chaikin Money Flow, MFI,
Anchored VWAP, Auto Fib Retracement, Auto Fib Extension dan Golden Pocket.

Setiap indikator mendapat satu baris di legenda dengan tiga tombol:

- **Show** / **Hide** menampilkan atau menyembunyikannya.
- **Settings** membuka input-nya (periode dan sebagainya) dan tab **Style**, tempat kamu bisa mengubah warna,
  ketebalan dan gaya setiap garis (**Solid**, **Dashed**, **Dotted**). **Defaults** mengembalikan pengaturan awal.
- **Remove** menghapusnya dari grafik.

Indikator pilihanmu diingat saat aplikasi dibuka lagi.

## 4. Menggambar di grafik

Alat gambar ada di tepi kiri grafik:

| Alat | Cara menggambar |
|---|---|
| **Trend line**, **Ray** | Klik dua titik, atau tekan, seret, lalu lepas |
| **Horizontal line**, **Horizontal ray** | Klik sekali |
| **Fib retracement** | Klik dua titik |
| **Trend-based fib extension** | Klik tiga titik |
| **Rectangle**, **Price range** | Klik dua sudut |

- **Magnet** (aktif secara bawaan) menempelkan setiap titik ke open, high, low atau close terdekat.
- Klik gambar untuk memilihnya, lalu seret untuk memindahkannya. **Delete** atau **Backspace** menghapus gambar yang
  dipilih.
- **Esc** membatalkan gambar yang sedang dibuat, lalu kembali ke **Cursor**.
- Gambar yang dipilih menampilkan harga titik-titiknya di sumbu harga dan tanggalnya di sumbu waktu.
- **Fib retracement** dan **Trend-based fib extension** menggambar level seperti TradingView, dengan setiap pita diarsir.
- **Hide drawings** menyembunyikan gambar tanpa menghapusnya. **Remove all drawings** menghapus semua gambar di saham
  ini, setelah meminta konfirmasi.

Gambar disimpan terpisah untuk setiap saham.

## 5. Mencari setup dengan Scanner

Scanner menampilkan semua pola yang sedang aktif di seluruh saham BEI.

1. Buka tab **Scanner** dan pilih **Timeframe** (**1D** atau **1W**).
2. Persempit daftarnya:
   - **Kind**, **Bias** (Bullish, Bearish, Neutral) dan **Status** (Forming, Confirmed, Breakout, Failed).
   - **Patterns**: centang pola tertentu untuk hanya menampilkan pola itu.
   - **Min score**: sembunyikan setup yang lebih lemah.
   - **Confluence**: **With confirmation** atau **Reversal + confirmation**.
   - **Avg value 20d ≥**: lewati saham yang kurang likuid berdasarkan rata-rata nilai transaksi hariannya, dalam miliar
     rupiah.
   - **Vol vs 20d ≥**: volume hari ini dibanding rata-rata 20 harinya. Coba **2.5** untuk menemukan lonjakan volume
     baru.
3. Klik judul kolom untuk mengurutkan, misalnya berdasarkan **Score**.
4. Klik satu baris untuk membuka saham itu di tab Chart, dengan timeframe yang sama, langsung diperbesar ke setup-nya.

**Reset filters** mengembalikan filter ke awal. Dengan Pro, **Export CSV** menyimpan daftar sebagai file spreadsheet.

Di paket gratis, Scanner menampilkan 5 setup teratas yang lolos filter bawaan; baris di bawahnya memberi tahu berapa
banyak setup lainnya.

## 6. Menyaring saham (Pro)

Screener menyaring setiap saham berdasarkan harga, return, tren, volume dan fundamental.

1. Buka tab **Screener** dan pilih screen siap pakai di **Preset**, misalnya **Top Gainers**, **Unusual Volume**,
   **Near 52-Week High**, **Low P/E** atau **High Dividend Yield**.
2. Untuk membuat screen sendiri, pilih **Create screener**, atau **Edit** pada sebuah preset:
   - Beri **Name** dan **Description**.
   - Di **Filters**, pilih **Add filter**, pilih metriknya, pilih **at least** atau **at most**, lalu isi nilainya.
     Saham harus lolos semua filter.
3. Pilih **Metrics** untuk memilih kolom, dan klik judul kolom untuk mengurutkan.
4. Pilih **Save as new** untuk menyimpan screen-mu; screen itu lalu muncul di **Saved**. **Save** memperbarui screen
   yang sudah disimpan.
5. Klik satu baris untuk membuka sahamnya di tab Chart.

## 7. Mengikuti rotasi sektor (Pro)

Tab Sectors menunjukkan sektor mana yang menguat atau melemah dibanding IHSG. Tab ini butuh data sektor, yang tersedia
dari EODHD dan tidak dari Yahoo Finance.

1. Buka tab **Sectors**. Pilih **Daily** atau **Weekly** (bawaan) untuk grafiknya, dan level **Liquidity ≥** untuk
   menyingkirkan saham yang jarang diperdagangkan.
2. Baca grafiknya (relative rotation graph). Setiap sektor berada di salah satu dari empat kuadran:
   - **Leading**: lebih kuat dari IHSG dan masih menguat.
   - **Weakening**: lebih kuat dari IHSG tapi momentumnya melemah.
   - **Lagging**: lebih lemah dari IHSG dan masih melemah.
   - **Improving**: lebih lemah dari IHSG tapi momentumnya menguat.

   Sektor cenderung berputar searah jarum jam melewati kuadran-kuadran ini. **How to read this** menjelaskannya di dalam
   aplikasi.
3. Tabel di kanan punya dua tampilan:
   - **Rotation**: kuadran setiap sektor, kekuatannya dibanding pasar, dan momentumnya.
   - **Returns**: return 1D sampai 1Y, **Absolute** atau **vs IHSG**.
4. Klik sebuah sektor di grafik atau di tabel untuk menampilkan saham-sahamnya, beserta return dan kekuatannya
   dibanding IHSG dan dibanding sektornya. Klik sebuah saham untuk membuka grafiknya.

## 8. Mengaktifkan Pro

Panduan langkah demi langkah dengan gambar ada di [cara mengaktifkan Pro](ACTIVATE-PRO.md).

1. Beli Pro di Lynk.id: [bulanan](https://lynk.id/codewizard/0j4z82e188gn) atau
   [tahunan](https://lynk.id/codewizard/jr2qg5k48m85).
2. Di Chartwizard, buka **Settings → Licence**.
3. Isi **Email used to pay** dan **Order ID** dari struk Lynk.id, lalu pilih **Activate**. Jika baru saja membayar,
   tunggu sekitar satu menit lalu coba lagi.
4. Setelah aktif, bagian ini menampilkan **Licence key** kamu. Pilih **Copy** dan simpan.

**PC kedua.** Satu lisensi berlaku untuk 2 PC. Di PC kedua, isi email dan Order ID yang sama, atau tempel licence key di
**Licence key** lalu pilih **Activate with key**.

**PC ketiga.** Jika kedua slot sudah terpakai, aplikasi menampilkan daftar PC kamu beserta kapan terakhir terlihat.
Pilih **Release** pada PC yang sudah tidak dipakai untuk mengosongkan slotnya.

**Perpanjang.** Beli lagi dengan email yang sama, lalu pilih **Refresh** di **Settings → Licence**.

## 9. Mencadangkan dan memulihkan data

- **Settings → Database → Back up…** menyimpan salinan datamu di tempat yang kamu pilih.
- **Restore…** mengganti data dengan cadangan yang kamu pilih, lalu aplikasi dimulai ulang.

Datamu ada di `%APPDATA%\idx-chart`. Uninstall tidak menghapusnya, jadi memasang ulang melanjutkan dari data yang sama.

## Pintasan keyboard

| Tombol | Fungsi |
|---|---|
| **Enter** | Di kotak pencarian, membuka saham. Di tabel, membuka baris. |
| **Esc** | Membatalkan gambar, kembali ke kursor, mengosongkan kotak pencarian atau menutup dialog |
| **Delete** / **Backspace** | Menghapus gambar yang dipilih |
| **Alt+R** | Mengembalikan tampilan grafik |

## Mengatasi masalah

- **Windows bilang aplikasinya tidak dikenal.** Installer belum ditandatangani secara digital. Pilih **More info →
  Run anyway**.
- **Grafik dan daftar kosong.** Belum ada sinkronisasi yang selesai. Atur penyedia data di **Settings → Data provider**,
  lalu pilih **Sync now** di bilah status.
- **Tab Sectors bilang tidak ada data sektor.** Yahoo Finance tidak menyediakannya; ganti ke EODHD di
  **Settings → Data provider**.
- **Aktivasi bilang order tidak ditemukan.** Pastikan emailnya sama dengan yang dipakai saat membayar dan Order ID-nya
  sama persis dengan struk Lynk.id. Jika baru saja membayar, tunggu satu menit. Jika masih gagal, pilih
  **Contact support** di **Settings → Licence**.
- **Pola terlihat salah setelah mengubah ambang batas.** **Settings → Pattern cache → Rebuild pattern cache** memindai
  ulang.

Chartwizard adalah perangkat lunak grafik, bukan nasihat investasi.

# Revisi Landing Page YUKI Future Japan

## Ringkasan Perubahan

### 1. Hapus Statistik Alumni (Hero Section)
- Hapus badge "500+ Alumni", "JLPT N5–N3", "98% Tingkat Lulus" dari bawah headline Hero.
- LPK masih baru, sehingga data alumni belum relevan.

### 2. Program: N5 & N4 Saja
- Di section Program, hapus card **N3 — Kelas Lanjutan** dan **Tokutei Ginou (SSW)**.
- Tinggalkan 2 card: **N5 — Kelas Dasar** dan **N4 — Kelas Menengah**.
- Perbarui teks deskripsi section dari "Empat jalur" menjadi "Dua jalur".
- Ubah grid layout dari 4 kolom menjadi 2 kolom (sm:grid-cols-2, tidak perlu lg:grid-cols-4).

### 3. Hapus Section Galeri
- Hapus seluruh section **Galeri** beserta impor asset galeri.
- Hapus link "Galeri" dari navigasi (desktop & mobile).
- Hapus pemanggilan `<Gallery />` dari halaman utama.

### 4. Ganti Form Pendaftaran → Kontak Langsung
- Hapus form input (nama, email, WA, dropdown program, dll).
- Ganti dengan tampilan CTA yang menampilkan **4 tombol/tautan langsung**:
  1. **Instagram** → https://www.instagram.com/lpk.yukifuturejapan
  2. **TikTok** → https://www.tiktok.com/@lpk.yuki.future.japan
  3. **WhatsApp Channel** → https://discord.com/channels/... (link yang diberikan user)
  4. **Chat WhatsApp** → https://wa.me/message/3WFZTS32WKGLK1
- Gunakan ikon yang sesuai untuk setiap platform.
- Tambahkan headline ajakan seperti "Hubungi Kami Langsung" dan deskripsi singkat.

## File yang Akan Diedit
- `src/components/site/sections.tsx` — perubahan pada Hero, Programs, Registration, penghapusan Gallery.
- `src/components/site/Nav.tsx` — penghapusan link Galeri.
- `src/routes/index.tsx` — penghapusan pemanggilan `<Gallery />`.

## Tidak Ada Perubahan Backend
Semua perubahan bersifat frontend/presentasi saja. Tidak ada database, auth, atau server function yang dimodifikasi.
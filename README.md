# KARISMA 6 Platform

> Portal digital resmi untuk **Karya, Inovasi, dan Prestasi Mahasiswa (KARISMA) 6** — kompetisi ilmiah mahasiswa tingkat nasional yang diselenggarakan oleh HMJ SSP Undiksha.

![KARISMA 6](https://via.placeholder.com/1200x400/0a0e1a/e6b800?text=KARISMA+6+Platform)

---

## ✨ Fitur

| Halaman | Keterangan |
|---|---|
| `/` | Landing page dengan hero cinematic, info lomba, timeline, pengumuman |
| `/registration` | Informasi dan detail kategori lomba |
| `/register` | Formulir pendaftaran peserta baru |
| `/login` | Login peserta & admin |
| `/dashboard` | Overview progres partisipasi peserta |
| `/dashboard/registration` | Detail registrasi tim |
| `/dashboard/payment` | Upload & status konfirmasi pembayaran |
| `/dashboard/submission` | Upload karya kompetisi |
| `/dashboard/certificate` | Download sertifikat partisipasi |
| `/dashboard/announcements` | Pengumuman & informasi dari panitia |
| `/admin/payment-recap` | Rekap & verifikasi pembayaran (admin) |
| `/admin/certificates` | Generate & distribusi sertifikat (admin) |

---

## 🚀 Mulai Pengembangan

### Prasyarat

- Node.js ≥ 18
- npm atau yarn

### Instalasi

```bash
# 1. Clone repo
git clone https://github.com/YOUR_USERNAME/karisma6-platform.git
cd karisma6-platform

# 2. Install dependensi
npm install

# 3. Jalankan dev server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173)

### Build untuk Produksi

```bash
npm run build
# Output ada di /dist — siap deploy ke Netlify, Vercel, dsb.
```

---

## 🔑 Akun Demo

| Role | Email | Password |
|---|---|---|
| Peserta | `peserta@undiksha.ac.id` | `peserta123` |
| Admin | `admin@karisma6.id` | `admin123` |

---

## 🛠️ Stack Teknologi

- **React 18** + **Vite** — frontend framework
- **React Router v6** — routing
- **Tailwind CSS** — styling
- **Lucide React** — icons
- **Framer Motion** — animasi

---

## 📁 Struktur Folder

```
src/
├── components/
│   ├── layout/         # Navbar, DashboardLayout, ProtectedRoute
│   └── ui/             # Alert, Badge, Modal, Table, dll.
├── lib/
│   ├── auth.jsx        # AuthContext & hooks
│   └── data.js         # Mock data & API helpers
├── pages/
│   ├── dashboard/      # Halaman dashboard peserta
│   ├── admin/          # Halaman admin
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Registration.jsx
│   └── Auth.jsx        # ForgotPassword, ResetPassword
├── App.jsx             # Router utama
├── main.jsx
└── index.css           # Tailwind + global styles
```

---

## ⚙️ Koneksi ke Backend

Semua data saat ini menggunakan **mock data** di `src/lib/data.js`. Untuk koneksi ke backend nyata:

1. Ganti fungsi di `src/lib/data.js` dengan `fetch` / `axios` ke API Anda
2. Ganti logika di `src/lib/auth.jsx` dengan endpoint auth (JWT, dll.)
3. Simpan environment variables di `.env`:

```env
VITE_API_BASE_URL=https://api.karisma6.id
```

---

## 🌐 Deploy

### Vercel
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Upload folder /dist ke Netlify, atau gunakan Netlify CLI
```

> **Penting:** Tambahkan redirect rule untuk SPA routing:
> - Netlify: buat file `public/_redirects` dengan isi `/* /index.html 200`
> - Vercel: sudah otomatis

---

## 📄 Lisensi

© 2025 HMJ Sosiologi & Sastra Pendidikan, Universitas Pendidikan Ganesha. All rights reserved.

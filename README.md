---
## 🚀 Fitur Utama

- 📄 Menampilkan daftar catatan
- 🔧 Komponen modular:
    - Header
    - Loading Indicator
    - Note Form (form input)
    - Note Item (kartu catatan)
- 🎨 Menggunakan Shadow DOM untuk isolasi gaya CSS
- ⚙️ Build dengan Webpack
- 📦 Struktur folder yang terorganisir dengan baik
---

## 📁 Struktur Folder

NotesApp/
├── dist/ # Output hasil build Webpack
├── node_modules/ # Dependency Node.js
├── src/
│ ├── component/ # Komponen Web Components (modular)
│ │ ├── headerComponent.js
│ │ ├── loadingIndicator.js
│ │ ├── noteForm.js
│ │ └── noteItem.js
│ ├── script/
│ │ └── index.js # Entry point aplikasi
│ └── styles/
│ ├── index.css # Styling global
│ └── index.html # Template HTML utama
├── sample-notes.js # Data catatan simulasi
├── .gitignore # File untuk mengabaikan file/folder saat push
├── package.json # Konfigurasi NPM & script
├── package-lock.json # Lock file npm
├── webpack.config.js # Konfigurasi Webpack
└── README.md # Dokumentasi proyek ini

---

## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript ES6+
- Web Components (Custom Elements, Shadow DOM)
- Webpack 5

---

## ⚙️ Instalasi & Menjalankan Proyek

### 1. Clone Repositori

```bash
git clone https://github.com/fauziarnda/NotesApp.git
cd NotesApp
```

### 2. Install Dependency

```bash
npm install

```

### 3. Menjalankan Mode Development

```bash
npm run start-dev
```

### 4. Build untuk Produksi

```bash
npm run build
```

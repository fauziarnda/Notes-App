## 📋Notes App

Aplikasi catatan sederhana berbasis Web Components dan Webpack. Pengguna dapat membuat, melihat, dan menghapus catatan. Proyek ini terintegrasi dengan RESTful API dari Dicoding.

---
## 🚀 Fitur Utama

- 📋 Menampilkan daftar catatan aktif
- ✅ Menambahkan catatan
- 🗑️ Menghapus catatan
- 📦 Modular dengan Web Components
- 🛠️ Build bundling menggunakan Webpack
- 🎨 Menggunakan Shadow DOM untuk isolasi gaya CSS
---

## 📁 Struktur Folder
```
NotesApp/
├── dist/ # Output hasil build Webpack
├── node_modules/ # Dependency Node.js
├── src/
│ ├── component/
│ │ ├── headerComponent.js
│ │ ├── loadingIndicator.js
│ │ ├── noteForm.js
│ │ └── noteItem.js
│ ├── script/
│ │ └── index.js 
│ └── styles/
│ ├── index.css 
│ └── index.html 
├── sample-notes.js 
├── .gitignore 
├── package.json 
├── package-lock.json 
├── webpack.config.js 
└── README.md 
```

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

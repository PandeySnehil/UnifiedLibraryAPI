# 📚 Unified Library API

![Coverage](https://img.shields.io/badge/coverage-80.32%25-yellowgreen)
![Node.js](https://img.shields.io/badge/node-v18.0.0-brightgreen)
![Express](https://img.shields.io/badge/express-v5.1.0-blue)

A simple and flexible RESTful API built with **Node.js** and **Express** that manages a categorized library of **books**, **movies**, **anime**, and **web series**. This project uses a file-based storage system (`data.json`) instead of a traditional database, making it beginner-friendly and lightweight.

---

## 🚀 Features

- 🔍 View items by type and genre (e.g., `/books/fantasy`)
- ➕ Add new items via POST requests
- ❌ Delete items by ID
- 💾 Data stored locally in a JSON file
- 🌐 Frontend HTML available for demo
- 📦 Fully tested with Postman

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **File System (fs)**
- **Postman (for API testing)**

---

## 📁 Folder Structure

- `index.js`
- `data/`
  - `data.json`
- `docs/screenshots/`
  - `post-success-image.png`
  - `get-success-image.png`
  - `delete-success-image.png`
- `postman/UnifiedLibraryAPI.postman_collection.json`
- `public/frontend.html`
- `tests/library.test.js`
- `package.json`
- `README.md`

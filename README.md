# 📚 Unified Library API

<<<<<<< HEAD
A lightweight and unified API that acts as a digital library — containing information on **Books**, **Movies**, **Anime**, and **Web Series**. Content is organized by **type** and further categorized by **genre**.

## ✨ Features

- 🔍 **Get items by type and genre**  
  Retrieve a list of entries such as `/books/fantasy`, `/anime/romance`, `/movies/action`, or `/webseries/comedy`.

- ➕ **Add new items**  
  Use a simple POST request to add books, movies, anime, or web series under any genre. The item receives an auto-generated unique ID.

- ❌ **Delete items by ID**  
  Delete any entry by its ID using a DELETE request.

- 🗃️ **Structured JSON storage**  
  All data is stored neatly in a `data.json` file, with type- and genre-based nesting.

- 🌐 **Built-in frontend viewer**  
  Includes a basic `frontend.html` to let users visually select type/genre and view results dynamically.

- 🧩 **Easy to extend**  
  Add new types (e.g., documentaries, podcasts) or genres without modifying core logic.

---

🛠 Built with **Node.js**, **Express.js**, and plain **HTML/CSS/JS**
=======
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

UnifiedLibraryAPI/
├── index.js # Main server file
├── data/
│ └── data.json # JSON file as lightweight database
├── public/
│ └── frontend.html # Frontend for demo/testing
├── tests/
│ └── library.test.js # Jest test file
├── postman/
│ └── UnifiedLibraryAPI.postman_collection.json
├── docs/
│ └── screenshots/
│ ├── get-success-image.png
│ ├── post-success-image.png
│ └── delete-success-image.png
├── coverage/ # Jest coverage report (after test run)
├── package.json
├── package-lock.json
└── README.md
>>>>>>> d2ff2fc (Initial commit with working API, tests, and docs)

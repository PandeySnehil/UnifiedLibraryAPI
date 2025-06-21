# 📚 Unified Library API

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

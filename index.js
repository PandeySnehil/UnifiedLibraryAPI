const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;

// ✅ Serve frontend.html and other static files
app.use(express.static(path.join(__dirname)));

app.use(express.json());

const getLibrary = () => JSON.parse(fs.readFileSync('data.json'));
const saveLibrary = (data) => fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

app.get('/', (req, res) => {
  res.send(`
    <h1>📚 Welcome to the Unified Library API</h1>
    <p>Try visiting <code>/books/fantasy</code> or open <code>frontend.html</code> in your browser.</p>
  `);
});

// 📖 GET items by type and genre
app.get('/:type/:genre', (req, res) => {
  const { type, genre } = req.params;
  const library = getLibrary();

  if (!library[type] || !library[type][genre]) {
    return res.status(404).send('Type or genre not found.');
  }

  res.json(library[type][genre]);
});

// ➕ POST new item
app.post('/:type/:genre', (req, res) => {
  const { type, genre } = req.params;
  const newItem = req.body;
  const library = getLibrary();

  if (!library[type]) library[type] = {};
  if (!library[type][genre]) library[type][genre] = [];

  newItem.id = Date.now();
  library[type][genre].push(newItem);

  saveLibrary(library);
  res.status(201).json(newItem);
});

// ❌ DELETE item
app.delete('/:type/:genre/:id', (req, res) => {
  const { type, genre, id } = req.params;
  const library = getLibrary();

  if (!library[type] || !library[type][genre]) {
    return res.status(404).send('Type or genre not found.');
  }

  const filtered = library[type][genre].filter(item => item.id != id);
  library[type][genre] = filtered;

  saveLibrary(library);
  res.send('Item deleted.');
});

app.listen(PORT, () => {
  console.log(`📚 Unified Library API running at http://localhost:${PORT}`);
});

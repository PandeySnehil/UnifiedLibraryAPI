const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;

const DATA_FILE = 'data.json';

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({}, null, 2));
}

app.use(express.static(path.join(__dirname)));
app.use(express.json());

const getLibrary = () => JSON.parse(fs.readFileSync(DATA_FILE));
const saveLibrary = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

app.get('/', (req, res) => {
  res.send(`
    <h1>📚 Welcome to the Unified Library API</h1>
    <p>Try visiting <code>/books/fantasy</code> or open <code>frontend.html</code> in your browser.</p>
  `);
});

app.get('/:type/:genre', (req, res) => {
  try {
    const { type, genre } = req.params;
    const library = getLibrary();

    if (!library[type] || !library[type][genre]) {
      return res.status(404).send('Type or genre not found.');
    }

    res.json(library[type][genre]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/:type/:genre', (req, res) => {
  try {
    const { type, genre } = req.params;
    const newItem = req.body;

    if (!newItem.title) {
      return res.status(400).send('Missing required field: title');
    }

    const library = getLibrary();
    if (!library[type]) library[type] = {};
    if (!library[type][genre]) library[type][genre] = [];

    newItem.id = Date.now();
    library[type][genre].push(newItem);

    saveLibrary(library);
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/:type/:genre/:id', (req, res) => {
  try {
    const { type, genre, id } = req.params;
    const library = getLibrary();

    if (!library[type] || !library[type][genre]) {
      return res.status(404).send('Type or genre not found.');
    }

    const originalLength = library[type][genre].length;
    library[type][genre] = library[type][genre].filter(item => item.id !== Number(id));

    if (library[type][genre].length === originalLength) {
      return res.status(404).send('Item not found.');
    }

    saveLibrary(library);
    res.send('Item deleted.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`📚 Unified Library API running at http://localhost:${PORT}`);
  });
}

module.exports = app;

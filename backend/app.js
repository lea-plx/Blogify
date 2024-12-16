const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./db.sqlite');

app.use(bodyParser.json());

// Créer la table si elle n'existe pas
db.run(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT
  )
`);

// Endpoint pour récupérer tous les articles
app.get('/articles', (req, res) => {
  db.all('SELECT * FROM articles', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Endpoint pour ajouter un article
app.post('/articles', (req, res) => {
  const { title, content } = req.body;
  db.run(
    'INSERT INTO articles (title, content) VALUES (?, ?)',
    [title, content],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Lancer le serveur
app.listen(5000, () => {
  console.log('Serveur démarré sur http://localhost:5000');
});


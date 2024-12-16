const express = require('express');
// const { Article } = require('../db');  // On ne l'utilise plus, car pas de DB
const router = express.Router();

// Données statiques d'articles pour test
const articles = [
  { id: 1, title: 'Premier article', content: 'Contenu du premier article.' },
  { id: 2, title: 'Deuxième article', content: 'Contenu du deuxième article.' },
];

// Route pour créer un article
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newArticle = { id: articles.length + 1, title, content };
    articles.push(newArticle); // Ajout de l'article dans le tableau statique
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'article.' });
  }
});

// Route pour récupérer tous les articles
router.get('/', async (req, res) => {
  try {
    res.json(articles); // Retourne les articles statiques
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des articles.' });
  }
});

module.exports = router;

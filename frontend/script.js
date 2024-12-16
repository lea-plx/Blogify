// Charger les articles depuis l'API
async function loadArticles() {
    const response = await fetch('/articles');
    const articles = await response.json();
    const articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = articles.map(
      article => `<h3>${article.title}</h3><p>${article.content}</p>`
    ).join('');
  }
  
  // Ajouter un nouvel article via l'API
  document.getElementById('articleForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    await fetch('/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
  
    loadArticles();
  });
  
  loadArticles();
  
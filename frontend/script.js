// Sélection des éléments
const addArticleForm = document.getElementById("addArticleForm");
const articleTitleInput = document.getElementById("articleTitle");
const articleContentInput = document.getElementById("articleContent");
const articlesList = document.getElementById("articlesList");

// Tableau pour stocker les articles
let articles = [];

// Fonction pour afficher les articles
function displayArticles() {
  articlesList.innerHTML = ""; // Réinitialise l'affichage
  articles.forEach((article, index) => {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("article-title");
    titleElement.textContent = article.title;

    const contentElement = document.createElement("p");
    contentElement.classList.add("article-content");
    contentElement.textContent = article.content;

    // Bouton pour supprimer un article
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      articles.splice(index, 1);
      displayArticles();
    });

    // Ajoute le titre, contenu et bouton au conteneur
    articleDiv.appendChild(titleElement);
    articleDiv.appendChild(contentElement);
    articleDiv.appendChild(deleteButton);

    articlesList.appendChild(articleDiv);
  });
}

// Gestionnaire d'événement pour le formulaire
addArticleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Récupère les valeurs des champs
  const title = articleTitleInput.value;
  const content = articleContentInput.value;

  // Ajoute un nouvel article
  articles.push({ title, content });

  // Réinitialise les champs
  articleTitleInput.value = "";
  articleContentInput.value = "";

  // Met à jour l'affichage
  displayArticles();
});

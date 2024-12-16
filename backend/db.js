// Enlève tout ce qui concerne la connexion à MySQL
// Si tu n'as pas besoin de la base de données, tu peux commenter ce bloc
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('blogify', 'user', 'password', {
//   host: 'db',
//   dialect: 'mysql',
//   port: 3306,
// });

// const initDb = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connexion à la base de données réussie !');
//   } catch (error) {
//     console.error('Impossible de se connecter à la base de données :', error);
//   }
// };


// const jwt = require('jsonwebtoken');
// const secretKey = 'your_secret_key'; // Remplacez par votre clé secrète JWT

// // Middleware pour vérifier le jeton JWT et les autorisations
// const verifyTokenAndRole = (requiredRole) => (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   // Vérifiez le jeton JWT et extrayez les informations sur l'utilisateur
//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Forbidden' });
//     }

//     // Vérifiez le rôle de l'utilisateur
//     if (decoded.role !== requiredRole) {
//       return res.status(403).json({ message: 'Insufficient permissions' });
//     }

//     // L'utilisateur a les autorisations requises
//     req.user = decoded;
//     next();
//   });
// };

// module.exports = { verifyTokenAndRole };

// //  Le middleware verifyTokenAndRole peut être utilisé pour vérifier à la fois l'authenticité du jeton JWT et le rôle de l'utilisateur dans les requêtes HTTP

// // Route Middleware Usage :
// // On peut utiliser ce middleware dans nos routes pour protéger les ressources nécessitant des autorisations spécifiques.
// // Importer le middleware dans notre fichier de routes userRoutes.js.
// // Utilise-le en tant que middleware pour protéger les routes nécessitant des rôles spécifiques.

// //Par exemple, on a protégé une route d'admin dans userRoutes.js
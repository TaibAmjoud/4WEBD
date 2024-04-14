const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const { verifyTokenAndRole } = require('../middleware/authMiddleware');

// Route pour l'inscription d'un nouvel utilisateur
router.post('/register', userController.registerUser);

// Route pour récupérer tous les utilisateurs
router.get('/', userController.getAllUsers);

// Route pour récupérer un utilisateur par son ID
router.get('/:id', userController.getUserById);

// Route pour mettre à jour un utilisateur par son ID
router.put('/:id', userController.updateUserById);

// Route pour supprimer un utilisateur par son ID
router.delete('/:id', userController.deleteUserById);

// Route pour authentifier un utilisateur 
router.post('/login', userController.login);

// Route pour déconnecter un utilisateur (révoquer le jeton d'authentification) 
router.post('/logout', userController.logout);

// Route pour récupérer les détails de l'utilisateur actuellement connecté 
router.get('/profile', userController.getUserProfile);

// Route pour mettre à jour le mot de passe de l'utilisateur connecté
router.put('/profile/update-password', userController.updatePassword);

// Route pour mettre à jour les informations de l'utilisateur connecté 
router.put('/profile/update-info', userController.updateUserInfo);

// utilisation du middleware pour protéger la route admin
router.get('/admin', verifyTokenAndRole('Admin'), userController.adminRoute);

module.exports = router;


const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Route pour créer un nouvel événement
router.post('/', eventController.createEvent);

// Route pour récupérer tous les événements
router.get('/', eventController.getAllEvents);

// Route pour récupérer un événement par son ID
router.get('/:id', eventController.getEventById);

// Route pour mettre à jour un événement par son ID
router.put('/:id', eventController.updateEventById);

// Route pour supprimer un événement par son ID
router.delete('/:id', eventController.deleteEventById);

module.exports = router;

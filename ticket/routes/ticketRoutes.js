const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Route pour créer un nouveau ticket
router.post('/', ticketController.createTicket);

// Route pour récupérer tous les tickets
router.get('/', ticketController.getAllTickets);

// Route pour récupérer un ticket par son ID
router.get('/:id', ticketController.getTicketById);

// Route pour mettre à jour un ticket par son ID
router.put('/:id', ticketController.updateTicketById);

// Route pour supprimer un ticket par son ID
router.delete('/:id', ticketController.deleteTicketById);

module.exports = router;

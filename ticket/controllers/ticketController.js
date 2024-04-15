const Ticket = require('../models/ticket');

// Créer un nouveau ticket
const createTicket = async (req, res) => {
    try {
        const newTicket = new Ticket(req.body);
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Récupérer tous les tickets
const getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Récupérer un ticket par son ID
const getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Mettre à jour un ticket par son ID
const updateTicketById = async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json(updatedTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Supprimer un ticket par son ID
const deleteTicketById = async (req, res) => {
    try {
        const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
        if (!deletedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Rechercher l'utilisateur associé à un ticket par son numéro de ticket
const getUserByTicketNumber = async (req, res) => {
    try {
        const { ticketNumber } = req.params;
        const ticket = await Ticket.findOne({ uuid: ticketNumber });
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        const user = await User.findById(ticket.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicketById,
    deleteTicketById,
    getUserByTicketNumber
};

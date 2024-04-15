const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    uuid: {
        type: String,
        required: true
    },
    eventId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event', 
        required: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    price: {
        type: Number,
        required: true
    },
    purchaseDate: { 
        type: Date, 
        default: Date.now
    },
});

// Créer un modèle de ticket à partir du schéma
const Ticket = mongoose.model('Ticket', ticketSchema);

// Validation avec Joi
function validateTicket(ticket) {
    const schema = Joi.object({
        event: Joi.string().required(),
        price: Joi.number().required(),
        seatNumber: Joi.string().required()
    });

    return schema.validate(ticket);
}

module.exports = {
    Ticket,
    validate: validateTicket
};

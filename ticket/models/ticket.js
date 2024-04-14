const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    }
});

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

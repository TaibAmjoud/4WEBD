const mongoose = require('mongoose');
const Joi = require('joi');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    maxTickets: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    tickets: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Ticket' 
    }]
});

const Event = mongoose.model('Event', eventSchema);

function validateEvent(event){
    const schema = Joi.object({
        title: Joi.string().required(),
        price: Joi.string().required(),
        date: Joi.date().required(),
        address: Joi.string().required(),
        description: Joi.string().required(),
        maxTickets: Joi.number().required(),
        location: Joi.string().required()
    });

    return schema.validate(event);
}

module.exports = {
    eventSchema,
    Event,
    validateEvent
};

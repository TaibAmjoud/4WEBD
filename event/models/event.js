const mongoose = require('mongoose');
const Joi = require('joi');


const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    prix: {
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
    }
});

const Event = mongoose.model('Event', eventSchema);

function validateEvent(event){
    const schema = Joi.object({
        title: Joi.string().required(),
        prix: Joi.string().required(),
        adresse: Joi.string().required(),
        description: Joi.string().required(),
    });

    return schema.validate(event);
}

exports.eventSchema= eventSchema;
exports.Event = Event;
exports.validate = validateEvent;
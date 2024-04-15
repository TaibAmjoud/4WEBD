const mongoose = require('mongoose');
const Joi = require('joi');


const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    localisation: {
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
        eventName: Joi.string().required(),
        price: Joi.string().required(),
        localisation: Joi.string().required(),
        description: Joi.string().required()
    });

    return schema.validate(event);
}

exports.eventSchema= eventSchema;
exports.Event = Event;
exports.validate = validateEvent;
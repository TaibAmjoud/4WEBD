const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'EventCreator', 'User'], // Les rôles disponibles
        default: 'User' // Par défaut, un utilisateur est un simple utilisateur
    },
    tickets: [{
        type: String // Peut-être que chaque ticket est juste un numéro, on peut stocker l'ID du ticket si on a un modèle de données pour les tickets
    }]
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string().valid('Admin', 'EventCreator', 'User').default('User'),
        tickets: Joi.array().items(Joi.string()) // Vous ajuster la validation en fonction de la structure réelle des tickets
    });
    return schema.validate(user);
}

module.exports = {
    User,
    validateUser
};

const mongoose = require('mongoose');
const express = require('express');
const {Event, validate} = require('../models/event');
const router = express.Router();



router.get('/', async (req, res) => {
    const events = await Event.find().sort('name');
    res.send(events);
});



router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let event = new Event({
        title: req.body.title,
        date: req.body.date,
        address: req.body.address,
        prix: req.body.prix,
        description: req.body.description
    });

    event = await event.save();
    res.send(event);
});


router.delete('/:id',  async (req, res) => {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) return res.status(404).send("The event with the given ID doesn't exist");
    res.send("the event is deleted");
});


module.exports = router; 
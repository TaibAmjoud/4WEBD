const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    desc: String,
    unit: Number,
    price: Number
});

module.exports =  mongoose.model('product', ProductSchema);
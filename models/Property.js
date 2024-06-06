const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: String,
    type: String,
    description: String,
    price: Number,
    area: Number,
    rooms: Number,
    location: String,
    imageUrl: String,
});

module.exports = mongoose.model('Property', PropertySchema);

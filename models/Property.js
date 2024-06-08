const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: String,
    type: String,
    description: String,
    price: Number,
    numberOfRooms: Number,
    location: String,
});

module.exports = mongoose.model('Property', PropertySchema);

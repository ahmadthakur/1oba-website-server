const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['buyer', 'seller'] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

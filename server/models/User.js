const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['reader', 'writer'], default: 'writer' }
});

module.exports = mongoose.model('User', userSchema);
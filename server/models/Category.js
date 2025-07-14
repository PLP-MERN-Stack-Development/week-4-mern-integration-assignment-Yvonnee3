const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a category name'],
        trim: true,
        unique: true,
        maxlength: [12, 'Category name cannot be more than 50 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a category description'],
        trim: true,
    },
    
});

module.exports = mongoose.model('Category', CategorySchema);

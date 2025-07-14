const Category = require('../models/Category.js');

exports.createCategory = async (req, res) => {
    const category  = await Category.create({...req.body, owner: req.user.id });
    res.json(category);
};

exports.getAllCategories = async (req, res) => {
    const categories = await Category.find().populate('category');
    res.json(categories);
}
exports.getCategoryById = async (req, res) => {
    const category = await Category.findById(req.params.id).populate('category');
    if (!category) {
        return res.status(404).json({ message: 'category not found' });
    }

    res.json(category);
};

exports.updateCategory = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
};

exports.deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully' });

};
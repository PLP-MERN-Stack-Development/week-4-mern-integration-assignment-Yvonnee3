const express = require('express');
const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();


router.post('/', protect, createCategory);
router.get('/all', protect, getAllCategories);
router.get('/:id', protect, getCategoryById);
router.put('/:id', protect, authorize(['writer']), updateCategory);
router.delete('/:id', protect, authorize(['writer']), deleteCategory);

module.exports = router;
const express = require('express');
const { createPost, getMyPosts, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createPost);
router.get('/me', protect, getMyPosts);
router.get('/', protect, getAllPosts);
router.get('/:id', protect, getPostById);
router.put('/:id', protect, authorize(['writer']), updatePost);
router.delete('/:id', protect, authorize(['writer']), deletePost);

module.exports = router;
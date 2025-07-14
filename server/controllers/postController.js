const Post = require('../models/Post.js');

exports.createPost = async (req, res) => {
    const post = await Post.create({...req.body, owner: req.user.id });
    res.json(post);
};

exports.getMyPosts = async (req,res) => {
    const posts = await Post.find({ owner: req.user.id }).populate('category');
    res.json(posts);
}

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find().populate('category');
    res.json(posts);
}
exports.getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id).populate('category');
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
};

exports.updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
};

exports.deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
};
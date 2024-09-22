const Post = require('../models/post');

exports.allPost = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }); // Latest first
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
exports.postById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(400).json({ error: 'Invalid post ID' });
    }
};
exports.createpost = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const newPost = new Post({ title, content, author });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ error: 'Invalid post data', details: err.message });
    }
};
exports.updatepost = async (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { title, content, author },
            { new: true, runValidators: true }
        );
        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(400).json({ error: 'Invalid post data or ID', details: err.message });
    }
};
exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if (deletedPost) {
            res.json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(400).json({ error: 'Invalid post ID' });
    }
};



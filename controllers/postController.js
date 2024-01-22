const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({ title, body });
        const savedPost = await post.save();
        res.status(200).json({ post: savedPost, });
    }
    catch (e) {
        res.status(400).json({ error: 'Error while creating post', });
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        // const allPosts = await Post.find();
        const allPosts = await Post.find().populate('comments').populate('likes').exec();
        res.json({ allPosts, });
    }
    catch (e) {
        return res.status(400).json({ error: `Error while creating post ${e}` });
    }
}
const Post = require('../models/postModel');
const Like = require('../models/likeModel')

// like a post
exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({ post, user });
        const saveLike = await like.save();
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLike._id } }, { new: true }).populate('likes').populate('comments').exec();
        res.json({ updatePost })
    }
    catch (e) {
        res.json({
            error: `error while like post ${e}`
        })
    }
}

exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;
        const deleteLike = await Like.findOneAndDelete({ post: post, _id: like });
        const updatePost = await Post.findByIdAndUpdate(post, { $pull: { likes: deleteLike._id } });
        res.json({ post: updatePost });
    }
    catch (e) {
        res.json({
            error: `error while unlike post ${e}`
        })
    }
}

exports.dummyLink = (req, res) => {
    res.send('this is the dummy page');
};
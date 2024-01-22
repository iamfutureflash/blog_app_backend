// import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// business logic
exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;
        const comment = new Comment({ post, user, body, });
        const savedComment = await comment.save();
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true }).populate('comments').populate('likes').exec();
        res.send({
            savedComment: savedComment,
            post: updatePost,
        })
    }
    catch (e) {
        return res.status(500).json({ error: `Error while creating comment ${e}`, })
    }
}
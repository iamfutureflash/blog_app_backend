const Post = require("../model/postModel");
const Comment = require("../model/commentModel");

exports.createComment = async (rq, rs) => {
    try {
        const { post, user, body } = rq.body;
        const comment = new Comment({ body, post, user });
        const savedComment = await comment.save();
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments").exec();
            rs.status(200).json({
                post:updatedPost,
            });
    }
    catch (e) {
        rs.status(500).json({
            error:"error while creating comment",
        })
        console.error(e);
        process.exit(1);
    }
}
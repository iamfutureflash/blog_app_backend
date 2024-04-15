const Post = require("../model/postModel");
const Comment = require("../model/commentModel");
const Like = require("../model/likeModel");

exports.likePost = async (rq, rs) => {
    try {
        const { post, user } = rq.body;
        const like = new Like({ post, user });
        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true }).populate('likes').exec();
        rs.status(200).json({
            post: updatedPost,
        });
    }
    catch (e) {
        rs.status(500).json({
            error: "error while liking post",
        })
        console.error(e);
        process.exit(1);
    }
}

exports.unlike = async (rq, rs) => {
    try {
        const { post, like } = rq.body;

        const deleteLike = await Like.findOneAndDelete({ _id: like, post: post });

        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deleteLike._id } }, { new: true });


        rs.status(200).json({
            post: updatedPost,
            success: true,
            message: `unLike post successfully for post id -> ${post} and like id -> ${like} `,
        });
    }
    catch (e) {
        rs.status(500).json({
            error: `error while unlike ${e}`,
            success: false,
            message: `unLike post error for post id -> ${post} and like id -> ${like} `,
        })
        console.error(e);
        process.exit(1);
    }
}
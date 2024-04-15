const Post = require("../model/postModel");
const Comment = require("../model/commentModel");

exports.createComment = async (rq, rs) => {
    try {
        const { post, user, body } = rq.body;
        if (!post || !user || !body) {
            let missingFields = [];
            if (!post) missingFields.push("post");
            if (!user) missingFields.push("user");
            if (!body) missingFields.push("body");

            rs.status(404).json({
                message: `Comment body is missing ${missingFields.join(", ")} object`,
                success: false,
            });
        }

        const comment = new Comment({ body, post, user });
        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments").exec();

        
        rs.status(200).json({
            post: updatedPost,
            success: true,
        });
    }
    catch (e) {
        rs.status(500).json({
            error: "error while creating comment",
        })
        console.error(e);
        process.exit(1);
    }
}
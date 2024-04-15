const Post = require("../model/postModel");
const Comment = require("../model/commentModel");

exports.createPosts = async (rq, rs) => {
    try {
        const { title, body } = rq.body;
        if (!title || !body) {
            let missingFields = [];
            if (!title) missingFields.push("title");
            if (!body) missingFields.push("body");

            rs.status(404).json({
                message: `Comment body is missing ${missingFields.join(", ")} object`,
                success: false,
            });
        }
        const post = new Post({ title, body });
        const savedPost = await post.save();
        rs.status(200).json({
            post: savedPost,
        });
    }
    catch (e) {
        rs.status(500).json({
            error: "error while creating post",
        })
        console.error(e);
        process.exit(1);
    }
}

exports.getAllPosts = async (rq, rs) => {
    try {
        const allPosts = await Post
            .find()
            .populate("comments")
            .populate("likes")
            .exec();
        rs.status(200).json({
            allPosts: allPosts,
            success: true,
        });
    }
    catch (e) {
        rs.status(500).json({
            error: `error while getting post ${e}`,
            success: false,
        })
        console.error(e);
        process.exit(1);
    }
}
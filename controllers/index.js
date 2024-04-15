const { createComment } = require('./CommentController');
const { likePost, unlike } = require('./likeController');
const { createPosts, getAllPosts } = require('./postController');

module.exports = {

    createComment,
    createPosts,
    getAllPosts,
    likePost,
    unlike,
};
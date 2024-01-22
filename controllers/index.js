const { createComment } = require('./commentController');
const { dummyLink, likePost, unlikePost } = require('./likeController');
const { createPost, getAllPosts } = require('./postController')

module.exports = {
    createComment,
    dummyLink,
    createPost,
    getAllPosts,
    likePost,
    unlikePost
};
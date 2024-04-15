const express = require('express');
const { createComment, createPosts, getAllPosts, likePost, unlike } = require('../controllers');

const blogRouter = express.Router();

// import controller  

blogRouter.post('/posts/create', createPosts);
blogRouter.get('/posts', getAllPosts);
blogRouter.post('/comments/create', createComment);
blogRouter.post('/likes/like', likePost);
blogRouter.post('/likes/unlike', unlike);
blogRouter.get('/dummyRoute', (req, res) => { res.send('this is dummy route') });

module.exports = blogRouter;
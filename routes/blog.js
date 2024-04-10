const express = require('express');
const { model } = require('mongoose');
const { createComment } = require('../controllers/CommentController');
const router = express.Router();

// import controller  

router.post('/comments/create', createComment)
// router.get('/posts/create', () => { })
// router.post('/posts/create', () => { })
// router.post('/posts/create', () => { })
// router.post('/posts/create', () => { })
router.get('/dummyRoute', (req, res) => { res.send('this is dummy route') })

module.exports = router
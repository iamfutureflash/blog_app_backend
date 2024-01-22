//import mongoose
const mongoose = require('mongoose');

// make route handler
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: String,
        required: true,
    },
})

// export route handler
module.exports = mongoose.model('Like', likeSchema);
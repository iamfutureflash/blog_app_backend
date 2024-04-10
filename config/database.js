const mongoose = require('mongoose');
require("dotenv").config();
const connectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
        .then(() => {
            console.log('DB connected successfully');
        })
        .catch((e) => {
            console.error('DB facing connection issue');
            console.error(e);
            process.exit(1);
        })
}

module.exports = connectWithDB;
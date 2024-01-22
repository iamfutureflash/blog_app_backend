const { connect } = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;
const connectWithDb = () => {
    connect(DATABASE_URL)
        .then(() => { console.log(`DB Connected Successfully at ${DATABASE_URL}`); })
        .catch((error) => {
            console.log('DB Facing connection issue');
            console.log(error);
            process.exit(1);
        })
}

module.exports = connectWithDb;
const express = require('express');
const connectWithDB = require('./config/database');
const blog = require("./routes/blog")
require("dotenv").config();


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/v1", blog);
app.listen(PORT, () => {
    console.log(`app is started successfully at port ${PORT}`);
})
app.get('/', (req, res) => {
    res.send('<h1>this is homepage for blog app backend</h1>')
})
connectWithDB();
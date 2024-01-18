require("dotenv").config();
const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;
const blog = require("./routes/blog")
const connectWithDB = require("./config/database")
app.use(express.json());
app.use("api/v1", blog)

connectWithDB();

app.listen(PORT, () => { console.log("App is running successfully"); })

app.get('/', (req, res) => {
    res.send('<h1>This is Home Page baby</h1>');
})
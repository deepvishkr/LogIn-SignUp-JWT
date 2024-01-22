const express = require('express');
const mongoose = require('mongoose');
const app = express();

const routes = require("./routes/route")
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(routes)

const connect = mongoose.connect("mongodb+srv://deepak:vishal@cluster0.spazn9r.mongodb.net/?retryWrites=true&w=majority")
connect.then(() => {
    console.log("mongodb connected")
}).catch((err) => {
    console.log(err.message)


})


console.log("hello");
const port = 5000;
app.listen(5000, () => {
    console.log('Serving on port 5000')
})
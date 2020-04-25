const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const artists = require('./routes/api/artists')

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI

//Connect to Mongoose Db
mongoose.connect(db,{useUnifiedTopology:true, useNewUrlParser:true})
.then(() => console.log("Mongoose DB Connected"))
.catch(err => console.log("error"));

//Use Routes
app.use("/api/artists", artists)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(client/build))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build","index.html"))
        });
}


const port = process.env.PORT || 5000

app.listen(port, () => console.log("The Server Is Running"))
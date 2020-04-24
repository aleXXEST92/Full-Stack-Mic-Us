const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const artistSchema = new Schema({
    name: {
      type: String,
      // required: true
    },
    email: {
        type: String,
        // required: true
    },
    type: {
        type: String,
        // required: true
      },
    genre: {
        type: String,
        // required: true
    },
})

module.exports = Artist = mongoose.model("artist", artistSchema)
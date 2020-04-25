const express = require("express");
const router = express.Router();

const Artist = require('../../models/artists')

router.get("/", (req, res) => {
    Artist.find()
    .then(artists => res.json(artists))
});

router.post('/', (req, res) => {
    const newArtist = new Artist ({
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        genre: req.body.genre,
    })
    newArtist.save().then(Artist => res.json(Artist))
});

router.delete('/:_id', (req, res) => {
    Artist.findById(req.params._id)
    .then(Artist => Artist.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))
})

module.exports = router
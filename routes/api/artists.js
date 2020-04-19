const express = require("express");
const router = express.Router();

const Artist = require('../../models/artists')

// router.get("/", (req, res) => {
//     Artist.find()
//     .then(artists => res.json(artists))
// });

router.post('/api/artists', (req, res) => {
    console.log("backend request good", req.body)
    const newArtist = new Artist ({
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        genre: req.body.genre,
    })
    newArtist.save().then(newArtist => res.json(newArtist))
});

// router.delete('/:_id', (req, res) => {
//     Artist.findById(req.params._id)
//     .then(Artist => Artist.remove().then(() => res.json({success:true})))
//     .catch(err => res.status(404).json({success:false}))
// })

module.exports = router
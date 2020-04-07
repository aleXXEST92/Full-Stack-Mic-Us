const express = require("express");
const router = express.Router();

const Item = require('../../models/Items')

router.get("/", (req, res) => {
    Item.find()
    .then(items => res.json(items))
});

router.post('/', (req, res) => {
    const newItem = new Item ({
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        genre: req.body.genre,
    })
    newItem.save().then(item => res.json(item))
});

router.delete('/:_id', (req, res) => {
    Item.findById(req.params._id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))
})

module.exports = router
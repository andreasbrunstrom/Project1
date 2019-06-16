const express = require('express');
const router = express.Router();

//Item model
const User = require('../../models/user');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    User.find()
    .sort({date: -1})
    .then(user => res.json(user));
    console.log('get in router');
});

// @route PUT api/items
// @desc Create an Item
// @access Public
router.post('/', (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email
    });

    newUser.save().then(user => res.json(user));
});

// @route delete api/items
// @desc Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
   User.findById(req.params.id)
   .then(user => user.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}));
})


module.exports = router;
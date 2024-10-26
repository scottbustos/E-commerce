const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require('bcryptjs');

//REGISTER
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: (await bcrypt.hash(req.body.password, 10)).toString(),
    });
    try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router

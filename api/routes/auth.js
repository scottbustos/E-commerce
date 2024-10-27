const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

//LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json('Wrong credentials');
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json('Wrong credentials');
        const token = jwt.sign({
            id: user._id, isAdmin:
            user.isAdmin}, process.env.JWT_SECRET, {
                expiresIn: '3d',
            }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({token, ...others});
    } catch (err) {
        res.status(500).json(err);
}});

module.exports = router

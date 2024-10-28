const router = require("express").Router();
const User = require("../Models/User");
const {verifyTokenAndAuthorization} = require("./verifyToken");

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.user.password) {
        req.user.password = (await bcrypt.hash(req.body.password, 10)).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
        }, {new: true});
        res.status(200).json(updatedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }


});

module.exports = router

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
//GET ALL USERS
router.get("/", verifyTokenAndAuthorization, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});



//GET USER BY ID
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER STATS
router.get("/stats", verifyTokenAndAuthorization, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {$project: {_id: 0, month: {$month: "$createdAt"}}},
            {$group: {_id: "$month", total: {$sum: 1}}}
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});


//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router

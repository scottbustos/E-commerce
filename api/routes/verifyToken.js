const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    if (authHeader) {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403).json("Token is not valid");
            req.user = user;
            next();
        });
    }else {
            return res.sendStatus(401).json("You are not authenticated");
        }
    }
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

module.exports = {verifyToken, verifyTokenAndAuthorization};

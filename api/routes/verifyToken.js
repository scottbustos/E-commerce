const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.token;
        if (authHeader) {
          const token = authHeader.split(" ")[1];
          jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
              console.error(err);
              return res.status(403).json("Token is not valid");
            }
            req.user = user;
            next();
          });
        } else {
          return res.status(401).json("You are not authenticated");
        }
      } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
      }
};
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

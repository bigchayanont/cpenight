const jwt = require("jsonwebtoken");
const secretKey = require("../config/auth.config").secret;

const authMiddleware = (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(req.cookies);
  jwt.verify(token, secretKey, (err, payload) => {
    if (err) return res.sendStatus(401);
    if (payload.id) return next();
    return res.sendStatus(400);
  });
};

module.exports = authMiddleware;

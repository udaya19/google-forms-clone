const jwt = require("jsonwebtoken");

exports.decodedToken = (req, res) => {
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Login to perform an action",
    });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

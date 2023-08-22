const User = require("../models/user");

const { decodedToken } = require("../config/decodeJWT");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const decoded = decodedToken(req, res);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

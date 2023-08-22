const User = require("../models/user");

exports.userProfile = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    return user;
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

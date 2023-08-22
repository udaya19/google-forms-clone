const User = require("../models/user");

const generateToken = require("../config/generateJwt");

const comparePassword = require("../utils/comparePassword");
const hashPassword = require("../utils/hashPassword");
const { userProfile } = require("../utils/userProfile");
const { findById } = require("../utils/findById");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ success: false, error: "User already registered" });
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "User registered succesfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ success: false, error: "User not found" });
    const isSame = await comparePassword(password, user.password);
    if (!isSame)
      return res.status(404).json({ success: false, error: "User not found" });
    const token = generateToken(user._id, user.name, user.email);
    return res
      .status(200)
      .json({ success: true, message: "Login succesfull", token });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.profile = async (req, res) => {
  try {
    const user = await findById(User, req.user._id);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

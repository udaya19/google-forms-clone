const Form = require("../models/form");
const User = require("../models/user");

exports.addForm = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    const newForm = new Form();
    newForm.title = "Untitled Form";
    newForm.owner = user._id;
    await newForm.save();
    user.forms.push(newForm._id);
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Form created succesfully",
      newForm,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

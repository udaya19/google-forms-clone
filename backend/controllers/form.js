const Form = require("../models/form");
const User = require("../models/user");
const { userProfile } = require("../utils/userProfile");

exports.addForm = async (req, res) => {
  try {
    const user = await userProfile(req.user._id);
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

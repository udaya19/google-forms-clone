const Form = require("../models/form");
const User = require("../models/user");

const { findById } = require("../utils/findById");
const { userProfile } = require("../utils/userProfile");

exports.addForm = async (req, res) => {
  try {
    const user = await findById(User, req.user._id);
    const newForm = new Form();
    newForm.title = "Untitled Form";
    newForm.description = "Form Description";
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

exports.updateFormTitle = async (req, res) => {
  try {
    const form = await findById(Form, req.params.id);
    const { title } = req.body;
    form.title = title;
    await form.save();
    return res.status(200).json({
      success: true,
      message: "Title updated",
      form,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateFormDescription = async (req, res) => {
  try {
    const form = await findById(Form, req.params.id);
    const { description } = req.body;
    form.description = description;
    await form.save();
    return res.status(200).json({
      success: true,
      message: "Description updated",
      form,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

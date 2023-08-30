const Question = require("../models/quesitons");
const User = require("../models/user");
const Form = require("../models/form");
const Response = require("../models/responses");

exports.submitResponse = async (req, res) => {
  try {
    const { userId, responses } = req.body;
    const { formId } = req.params;
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({
        success: false,
        error: "Form not found",
      });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
    const newResponse = new Response();
    newResponse.user = userId;
    newResponse.formId = formId;
    newResponse.responses = responses;
    user.responses.push(newResponse._id);
    form.responses.push(newResponse._id);
    await form.save();
    await user.save();
    await newResponse.save();
    return res.status(200).json({
      success: true,
      message: "Form submitted succesfully",
      newResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

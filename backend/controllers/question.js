const Question = require("../models/quesitons");
const User = require("../models/user");
const Form = require("../models/form");

exports.addQuestion = async (req, res) => {
  try {
    const { title, questionType } = req.body;
    const form = await Form.findById(req.params.formId);
    if (!form)
      return res.status(404).json({
        success: false,
        error: "Form not found",
      });
    const user = await User.findById(req.user._id);
    if (!user)
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    const validUser = user.forms.includes(form._id);
    if (!validUser) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized access",
      });
    }
    const newQuestion = new Question();
    newQuestion.title = title;
    newQuestion.questionType = questionType;
    newQuestion.form = form._id;
    await newQuestion.save();
    return res.status(200).json({
      success: true,
      message: "Question added",
      newQuestion,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

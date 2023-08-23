const Question = require("../models/quesitons");
const User = require("../models/user");
const Form = require("../models/form");

exports.addQuestion = async (req, res) => {
  try {
    const { title } = req.body;
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
    newQuestion.questionType = "mcq";
    newQuestion.form = form._id;
    await newQuestion.save();
    form.questions.push(newQuestion._id);
    await form.save();
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

exports.addOptions = async (req, res) => {
  try {
    const { questionId, option } = req.body;
    const { formId } = req.params;
    const quesiton = await Question.findById(questionId);
    if (!quesiton)
      return res.status(404).json({
        success: false,
        error: "Question not found",
      });
    const form = await Form.findById(formId);
    if (!form)
      return res.status(404).json({
        success: false,
        error: "Form not found",
      });
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
    const isValidQuestion = form.questions.includes(quesiton._id);
    if (!isValidQuestion) {
      return res.status(404).json({
        success: false,
        error: "Question not found",
      });
    }
    if (quesiton.questionType !== "mcq") {
      return res.status(400).json({
        success: false,
        error: "Question is not mcq type",
      });
    }
    // if (form.owner === user._id) {
    quesiton.options.push(option);
    await quesiton.save();
    return res.status(200).json({
      success: true,
      message: "Option added",
      quesiton,
    });
    // } else {
    //   return res.status(401).json({
    //     success: false,
    //     error: "Unauthorized access",
    //   });
    // }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

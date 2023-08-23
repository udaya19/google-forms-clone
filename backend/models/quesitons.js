const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    questionType: {
      type: String,
      enum: ["mcq", "singleword", "paragraph"],
    },
    options: [String],
    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
    },
  },
  {
    timestamps: true,
  }
);

const Questions = mongoose.model("Questions", questionSchema);
module.exports = Questions;

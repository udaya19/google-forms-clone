const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
    },
    responses: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Questions",
        },
        answer: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Response = mongoose.model("Response", responseSchema);
module.exports = Response;

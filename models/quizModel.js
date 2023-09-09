const mongoose = require("mongoose");

const schema = mongoose.Schema;

const quizSchema = new schema(
  {
    language: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    questions: {
      type: Array({
        question: String,
        option1: String,

        option2: String,

        option3: String,

        option4: String,

        answer: String,
      }),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("quiz", quizSchema);

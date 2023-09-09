const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    quizResult: {
      type: Array({
        language: String,
        level: String,
        mark: Number,
      }),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userses", userSchema);

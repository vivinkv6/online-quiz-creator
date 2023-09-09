const mongoose = require("mongoose");
const quiz = require("../models/quizModel");

const quizController = async (req, res) => {
  const {
    questions,
    language,
    level,
  } = req.body;

  try {
    const result = await quiz.create({
      language,
      level,
      questions
    });

    if (!result) {
      return res.json({ err: "Quiz Creation Failed" });
    }
    res.json({ msg: "Quiz Created Successfully" });
  } catch (error) {
    res.json({ err: error.message });
  }
};

module.exports = quizController;

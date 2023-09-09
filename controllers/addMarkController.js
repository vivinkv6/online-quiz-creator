const user = require("../models/userModel");

const addMarkController = async (req, res) => {
  let updateUserProfile;
  const { email, quizResult } = req.body;

  const getCurrentQuizResult = await user.findOne({ email });

  if (getCurrentQuizResult.quizResult.length == 0) {
    updateUserProfile = await user.updateOne(
      { email: email },
      { quizResult: quizResult }
    );
  } else {
    updateUserProfile = await user.updateOne(
      { email: email },
      { quizResult: [...getCurrentQuizResult.quizResult, ...quizResult] }
    );
  }

  if (!updateUserProfile) {
    return res.json({ err: "Profile Update Failed" });
  }
  res.json({ msg: "Update Profile Successfully" });
};

module.exports = addMarkController;

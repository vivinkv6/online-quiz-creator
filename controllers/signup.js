const user = require("../models/userModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const salt = 10;
  const { email, password } = req.body;

  const checkEmail = await user.findOne({ email });

  //check if email is exist or not
  if (checkEmail) {
    return res.json({ msg: "Email Already Exist" });
  }

  //hash tha password
  bcrypt.hash(password, salt, async (err, hash) => {
    if (err) {
      return res.json({ err: "Account Creation Failed" });
    }
    console.log(hash);

    //store the user email and password to user collection
    const result = await user.create({ email, password: hash });

    //check if the data stored in user collection or not
    if (!result) {
      return res.json({ err: "Account Created Failed" });
    }
  });

  res.json({ msg: "Account Created Successfully" });
};

module.exports = signup;
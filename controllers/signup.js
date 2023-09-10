const user = require("../models/userModel");
const bcrypt = require("bcrypt");
const passwordValidator = require("password-validator");
const emailValidator = require("email-validator");
const signup = async (req, res) => {
  const salt = 10;
  const { email, password } = req.body;

  const checkEmail = await user.findOne({ email });

  //check if email is exist or not
  if (checkEmail) {
    return res.json({ msg: "Email Already Exist" });
  }

  const schema = new passwordValidator();

  //strong password validator
  schema
    .is()
    .min(8)
    .is()
    .max(50)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .is()
    .digits(2)
    .has()
    .not()
    .spaces();

  if (!schema.validate(password) && password.length < 8) {
    return res.json({ msg: "Password length must be 8 characters" });
  } else if (!schema.validate(password)) {
    return res.json({ msg: "Enter Strong Password" });
  }

  //email validator
  if (!emailValidator.validate(email)) {
    return res.json({ msg: "Enter Valid Email" });
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

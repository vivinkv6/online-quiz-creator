const bcrypt = require("bcrypt");
const user = require("../models/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;

  const fetchEmail = await user.findOne({ email });

  //check if email is exist or not

  if (!fetchEmail) {
    return res.json({ msg: "Email doesn't exist" });
  }

  //check if the  user entered password and hash password is correct or not
  bcrypt.compare(password, fetchEmail.password, (err, validity) => {
    if (err) {
      return res.json({ err: "Something went wrong please try again later" });
    }

    //if it is true "login successfully" otherwise "invalid password"
    if (validity) {
      res.json({ msg: "Login Successfully" });
    } else {
      res.json({ msg: "Invalid password" });
    }
  });
};

module.exports = login;

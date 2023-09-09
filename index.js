require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const app = express();

//import router
const quizRouter = require("./routes/quizRouter");
const getAllQuizRouter = require("./routes/getAllQuizRouter");
const getSpecificQuizRouter = require("./routes/getSpecificQuizRouter");
const addMarkRouter = require("./routes/addMarkRouter");
const signupRouter = require("./routes/signupRouter");
const loginRouter = require("./routes/loginRouter");

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//router
app.use("/create", quizRouter);
app.use("/quizes", getAllQuizRouter);
app.use("/choice", getSpecificQuizRouter);
app.use("/addmark", addMarkRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server and Database run Successfully`);
    });
  })
  .catch((err) => {
    console.log(`Issue: ${err}`);
  });

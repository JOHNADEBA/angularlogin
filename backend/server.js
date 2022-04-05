const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./models/connDb");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.URL)
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT} connected at ${new Date()}`);
    });
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.post("/adduser", (req, res) => {
  const newUser = new User(req.body);

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.send("Email already exist");
    }
    if (user) {
      console.log("imam problemo");
    } else {
      newUser
        .save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));

      console.log(newUser);
    }
  });
});


const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const passport = require("passport");
const mongoose = require("mongoose");

router.get("/login", (req, res) => {
  console.log("GET LOGIN");
  if (req.isAuthenticated()) {
    // Check if user in some organization
    res.json({ isLoggedIn: true, user: req.user });
  } else {
    res.json({ isLoggedIn: false });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  // res.json({ success: true, message: 'Logged out!' })
  res.redirect("/login");
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  let password = req.body.password;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      password = hash;

      // Check if user exists already
      User.findOne({ email })
        .then(user => {
          if (user) {
            return res
              .status(400)
              .json({ success: false, message: "User already exists!" });
          }

          console.log(password);

          new User({
            email,
            password
          })
            .save()
            .then(user => {
              // LOGIN USER HERE USE THE LOGIN ROUTE WITH FRONTEND?
              console.log(email, password);

              res.json({ message: "User registred" });
            });
        })
        .catch(err => console.error(err));
    });
  });

  console.log(password);
});

router.post("/login", (req, res) => {
  console.log(req.body);

  const email = req.body.email;
  let password = req.body.password;

  User.findOne({ email }).then(user => {
    if (user) {
      console.log(user.password);

      bcrypt.compare(password, user.password, (err, pwMatch) => {
        console.log(pwMatch);

        if (pwMatch) {
          console.log(user);

          // Do login here
          req.login(user._id, () => {
            res.json({ message: "Logged in..", loggedIn: true });
          });
        } else {
          res.json({ message: "Could not log in." });
        }
      });
    } else {
      res.json({ message: "Didnt find user." });
    }
  });
});

module.exports = router;

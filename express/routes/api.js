const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Widgets = require('../models/Widgets');
const passport = require("passport");
const mongoose = require("mongoose");

router.get("/isloggedin", (req, res) => {
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
  const email = req.body.email;
  let password = req.body.password;
  const pwCheck = req.body.pwCheck

  if(!validateEmail(email)){
    return res.json({ success: false, message: "That is not a valid email!" })
  } else if(password === pwCheck) {
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
  
            // Create User
            new User({
              email,
              password,
              name: 'John Doe'
            }).save().then(user => {
              res.json({ success: true, message: "User registred" });
              });
          })
          .catch(err => console.error(err));
      });
    });





  } else {
    res.json({ success: false, message: "Passwords doesn't match!" });
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  let password = req.body.password;
  await comparePasswords(email, password, null, (errMsg) => {
    if(errMsg){
      return res.json({ message: errMsg, loggedIn: false })

    }
    User.findOne({ email: email }).then(user => {
      req.login(user._id, () => {
        // CREATE WIDGETS
        createWidgets(user._id);
        res.json({ message: "Logged in..", loggedIn: true });
      });
    })
  });
});


router.post("/updatewidgets", async (req, res) => {
  const { spotify, news, facebook, twitter, calender, quicknotes, background } = req.body;
  if(req.isAuthenticated()) {
    const userid = req.user._id
    Widgets.findOneAndUpdate({user: userid},
    {
      spotify: {
        content: spotify.content,
        position: spotify.position
      }, 
      news: {
        content: news.content,
        position: news.position
      }, 
      facebook: {
        content: facebook.content,
        position: facebook.position
      }, 
      twitter: {
        content: twitter.content,
        position: twitter.position
      }, 
      calender: {
        content: calender.content,
        position: calender.position
      },
      "quicknotes.position": quicknotes.position,
      background
    }, () => res.json({message: 'Successfully updated'}))}

});

router.post("/savenotes", async (req, res) => {
  if(req.isAuthenticated()) {
    const userid = req.user._id
    Widgets.findOneAndUpdate({user: userid},
    { 
      "quicknotes.content": req.body.content
    }, () => res.json({message: 'Successfully updated'}))}
})

router.get("/getwidgets", (req, res) => {
  if (req.isAuthenticated()) {
    let userid = req.user._id;
    Widgets.findOne({user: userid}).then(widget => {
      res.json(widget);
    })

  } else {
    res.end();
  }

});

async function createWidgets(userid){
  new Widgets({
    user: userid,
    spotify: {
      content: '',
      position: 0
    },
    news: {
      content: '',
      position: 1
    }, 
    facebook: {
      content: '',
      position: 2
    }, 
    twitter: {
      content: '',
      position: 3
    }, 
    calender: {
      content: '',
      position: 4
    }, 
    quicknotes: {
      content: '',
      position: 5
    }, 
    background: ''
  }).save().then((widgets) => {
  })
}

router.post("/updateprofile", async (req, res) => {
  const { email, oldPassword, newPassword, newPasswordCheck, name } = req.body;

  if (newPassword !== newPasswordCheck) {
    return res.json({errorMessage: "Passwords doesn't match"})
  }

  if (newPassword.length < 6 || newPasswordCheck.length < 6) {
    return res.json({errorMessage: "New password too short"})
  }

  let savePassword

  if(newPassword) {
    savePassword = newPassword;
  } else {
    savePassword = oldPassword;
  }

  await comparePasswords(email, oldPassword, null, (errMsg) => {
    if(errMsg) {
      return res.json({errorMessage: 'Wrong password'})
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(savePassword, salt, (err, hash) => {
          savePassword = hash;
          User.findOneAndUpdate({email},
            {
              email: email, 
              password: savePassword, 
              name: name
            }, () => res.json({message: 'Successfully updated'}))
  
        })           
      })
    }
  })
});

router.get("/getprofile", (req, res) => {
  if (req.isAuthenticated()) {
    let userid = req.user._id;
    User.findOne({_id: userid}).then(profile => {
      let dataToSend = {name: profile.name, email: profile.email}
      res.send(dataToSend);
    })

  } else {
    res.end();
  }

});

const comparePasswords = async (email, comparePassword, newPassword, cb) => {
  User.findOne({ email: email }).then(user => {
    if (user) {
      bcrypt.compare(comparePassword, user.password, (err, pwMatch) => {

        if (pwMatch) {
          return cb();
        } else {
          return cb('Password did not match!');
        }
      });
    } else {
      // No user found
      return cb('User was not found!');
    }
  });
}

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

module.exports = router;

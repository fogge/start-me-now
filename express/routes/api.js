const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Widgets = require('../models/Widgets');
const passport = require("passport");
const mongoose = require("mongoose");

router.get("/isloggedin", (req, res) => {
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

          // Create User
          new User({
            email,
            password,
            name: 'John Doe'
          }).save().then(user => {
            res.json({ message: "User registred" });
            });
        })
        .catch(err => console.error(err));
    });
  });

  console.log(password);
});

router.post("/login", async (req, res) => {
  console.log(req.body);

  const email = req.body.email;
  let password = req.body.password;
  await comparePasswords(email, password, null, () => {
    User.findOne({ email: email }).then(user => {
      console.log(user);

      // Do login here
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
      quicknotes: {
        position: quicknotes.position
      },
      background
    }, () => res.json({message: 'Successfully updated'}))}

});

router.post("/savenotes", async (req, res) => {
  console.log(req.body);
  if(req.isAuthenticated()) {
    const userid = req.user._id
    Widgets.findOneAndUpdate({user: userid},
    { 
      $set: {    
        quicknotes: {
          content: req.body.content,
          position : req.body.position
        }
      }
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
    console.log('Widgets created', widgets)
  })
}

router.post("/updateprofile", async (req, res) => {
  console.log(req.body);
  const { email, oldPassword, newPassword, name } = req.body;

  let savePassword

  if(newPassword) {
    savePassword = newPassword;
  } else {
    savePassword = oldPassword;
  }

  await comparePasswords(email, oldPassword, null, () => {

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(savePassword, salt, (err, hash) => {
        savePassword = hash;
        console.log('hello');
        User.findOneAndUpdate({email},
          {
            email: email, 
            password: savePassword, 
            name: name
          }, () => res.json({message: 'Successfully updated'}))

      })           
    })


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
  console.log(email);
  User.findOne({ email: email }).then(user => {
    if (user) {
      console.log(user.password);

      bcrypt.compare(comparePassword, user.password, (err, pwMatch) => {
        console.log(pwMatch);

        if (pwMatch) {
          console.log('IT WAS FOUND!')
          cb();
          return true;
        } else {
          return false;
        }
      });
    } else {
      // No user found
      return false
    }
  });
}


module.exports = router;

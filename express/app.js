/* 
  The express app is a global called app
  It can respond on all routes under /api
*/
const app = global.expressApp;
const bodyParser = require("body-parser");
const User = require("./models/User");
const bcrypt = require("bcryptjs");


/* 
  Authentication
*/
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session')

/* 
  Database
*/
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

mongoose
  .connect(
    "mongodb://localhost:27017/startmenow",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("DB Connected!");
  });

  mongoose.Promise = global.Promise;
  const db = mongoose.connection

  app.use(cookieParser());
  app.use(session({
      secret: 'alittle1337lol',
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: db })
  }));


app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.get('/test', (req, res) => {
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.end();
})

app.get('/login', (req, res) => {
  console.log('GET LOGIN')
  if (req.isAuthenticated()) {
    // Check if user in some organization
    res.json({ isLoggedIn: true, user: req.user })
  } else {
    res.json({ isLoggedIn: false })
  }
})

app.get('/logout', (req, res) => {
  req.logout();
  // res.json({ success: true, message: 'Logged out!' })
  res.redirect('/login');
})



app.post("/register", async (req, res) => {
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
            .then((user) => {
              // LOGIN USER HERE USE THE LOGIN ROUTE WITH FRONTEND?
              console.log(email, password);

              res.json({message: "User registred"});
            });
        })
        .catch(err => console.error(err));
    });
  });

  console.log(password);

});



app.post("/login", (req, res) => {

  console.log(req.body);

  const email = req.body.email;
  let password = req.body.password;

  User.findOne({ email }).then(user => {
    if (user) {
      console.log(user.password);

      bcrypt.compare(password, user.password, (err, pwMatch) => {
        console.log(pwMatch);
        
        if(pwMatch) {
          console.log(user);

          // Do login here
          req.login(user._id, () => {
            res.json({message: 'Logged in..', loggedIn: true})
          })

        } else {
          res.json({message: 'Could not log in.'})

        }
  
      });
    } else {
      res.json({message: 'Didnt find user.'})
    }
   
  })

})


passport.serializeUser(function(user_id, done) {
  console.log(user_id);
  done(null, user_id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(null, user);
  });
});


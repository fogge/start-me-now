/* 
  The express app is a global called app
  It can respond on all routes under /api
*/
const app = global.expressApp;
const bodyParser = require("body-parser");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const cookieParser = require('cookie-parser');
const session = require('express-session')
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
  console.log(req.sessionID);
  console.log(req.cookies);
  res.end();
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
            .then(() => {
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
          // Do login here
          res.json({message: 'Logged in..'})

        } else {
          res.json({message: 'Could not log in.'})

        }
  
      });
    } else {
      res.json({message: 'Didnt find user.'})
    }
   
  })




})

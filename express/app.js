/* 
  The express app is a global called app
  It can respond on all routes under /api
*/
const app = global.expressApp;
const bodyParser = require("body-parser");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const apiRoutes = require('./routes/api');


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



passport.serializeUser(function(user_id, done) {
  console.log(user_id);
  done(null, user_id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(null, user);
  });
});

app.use('/', apiRoutes);

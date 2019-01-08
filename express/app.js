/* 
  The express app is a global called app
  It can respond on all routes under /api
*/
const app = global.expressApp;
const bodyParser = require("body-parser");
const User = require("./models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

mongoose
  .connect(
    "mongodb://localhost:27017/startmenow",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("DB Connected!");
  });

app.use(bodyParser.json());

// Set up socket.io
const io = require("socket.io")(global.httpServer, {
  path: global.production ? "/api/socket" : "/socket",
  serveClient: false
});

// Basic test of socket.io connectivity
io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
  });
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

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
              res.json("User registred");
            });
        })
        .catch(err => console.error(err));
    });
  });

  console.log(password);

});

app.get("/login", (req, res) => {

  const email = req.body.email;
  let password = req.body.password;

  User.findOne({ email }).then(user => {
    if (user) {
      console.log(user.password);

      bcrypt.compare(password, user.password, (err, pwMatch) => {
        console.log(pwMatch);
        
        if(pwMatch) {
          // Do login here
        }
  
        res.json(pwMatch)
      });
    } else {
      res.json('didnt find user..')
    }
   
  })




})

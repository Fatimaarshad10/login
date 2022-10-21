const express = require('express')
const CookieSession = require('cookie-session');
// const expressSession = require('express-session')
// var bodyParser = require('body-parser');
const passport = require('passport')
const paasport1 = require('./config/passport')
const AuthRoute = require('./routes/userRoutes')
// const cookieParser = require('cookie-parser')
// const Profile = require('./routes/profile')
const mongoose = require("mongoose");
const key = require('./config/keys')
const cors = require('cors')
const main = express()

main.use(
    CookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );
// set up routes
// main.use(expressSession({secret : 'anything'}))
// main.use(express.json())
main.use('/auth', AuthRoute);
main.use(passport.initialize())

// main.use('/profile', Profile);

//initialize the passport 

main.use(cors( {
    origin: "http://localhost:3000", 
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true, 
}));

mongoose.connect(key.mongodb.MONGO_URL, () => {
    console.log('connected to mongodb');
    console.log(key.mongodb.MONGO_URL)
});


main.listen(8000, () => {
    console.log('app now listening for requests on port');
});

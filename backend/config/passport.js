//libraries
const passport = require('passport')
const googlePassport = require('passport-google-oauth20')
const Twitter = require('passport-facebook')
const key = require('./keys')
const User = require('../models/UserDataSchema')

passport.use(new googlePassport({
    //option for the google strategy 
    clientID: key.google.clientID,
    clientSecret:key.google.clientSecret,
    callbackURL:'/auth/google/redirect',


},(accessToken,refreshToken,profile,done)=>{
        // check user is already exist in the database
        User.findOne({googleId:profile.id}).then((CurrentUser)=>{
            if(CurrentUser){
                // The user already exists in the database.
                console.log( 'User is ', CurrentUser)
                done(null,CurrentUser)
            }
            // Create a new user
            else{
    
            new User({
                username:profile.displayName,
                googleId:profile.id,
                // thumbnail:profile._json.picture
               
            }).save().then((newUser)=>{
                console.log('user created ', newUser)
                done(null,newUser)
    
            })
            console.log(profile)
        }
    
        
        })
   
    })) 
    passport.use(new Twitter({
        //option for the google strategy 
        clientID:'517553009715524',
        clientSecret: 'cf085888fa667886321db656e5d45760',
        callbackURL: "/auth/facebook/callback"
    
    
    },(accessToken,refreshToken,profile,done)=>{
            // check user is already exist in the database
            User.findOne({facebookId:profile.id}).then((CurrentUser)=>{
                if(CurrentUser){
                    // The user already exists in the database.
                    console.log( 'User is ', CurrentUser)
                    done(null,CurrentUser)
                }
                // Create a new user
                else{
        
                new User({
                    username:profile.displayName,
                    facebookId:profile.id,
                   
                }).save().then((newUser)=>{
                    console.log('user created ', newUser)
                    done(null,newUser)
        
                })
                console.log(profile)
            }
        
            
            })
       
        })) 
        //serialize the data
passport.serializeUser((user,done)=>{
    done(null,user.id)
})
//deserialize the data

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
        
    })   

})

    

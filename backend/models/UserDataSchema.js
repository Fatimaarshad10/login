const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema ({
    username:String,
    googleId:{
        type:String,
        required:false
    },
    facebookId:{
        type:String,
        required:false
    },
    userId:{
        type:String,
        required:false
    },
    // thumbnail:{
    //     type:String,
    //     required:false
    // }

   
})
const User = mongoose.model('UserInfo', userSchema)

module.exports = User

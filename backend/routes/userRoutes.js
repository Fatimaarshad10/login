const router = require('express').Router()
const passport = require('passport');
const User = require('../models/UserDataSchema')
//register route 
router.post('/register',async (req, res) => {
  const { username, userId} = req.body;
  try {
    if (!username || !userId ) {
      throw Error(" Fill Input Field");
    }
    const oldUser = await User.findOne({ username});
    if (oldUser) {
      return(res.status(200).json(oldUser))
     
    }
    const User1 = new User({ username, userId});
    await User1.save();
    
    res.status(200).json("user registered successfully");
    
  } catch (err) {
    res.status(400).send(err.message);
    
  }
}); 
//login route
router.get('/login/success',(req,res)=>{
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }

})
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000');
});
//google route
router.get('/google',passport.authenticate('google',{
    scope:['profile']

}))
router.get('/google/redirect',passport.authenticate('google',{
  failureRedirect: '/login',
 
}),
function(req,res){
 res.redirect('http://localhost:3000')
})
//google route
router.get('/facebook',passport.authenticate('facebook',{
  scope:['public_profile','email']

}))
router.get('/facebook/callback',passport.authenticate('facebook',{
successRedirect: 'http://localhost:3000',
// failureRedirect: '/login'
}),
function(req,res){
res.redirect('http://localhost:3000')
})
router.get('/userProfile', async (req,res)=>{
  const User1 = await User.find({});
      res.status(200).json(User1);
      
    
})
module.exports = router
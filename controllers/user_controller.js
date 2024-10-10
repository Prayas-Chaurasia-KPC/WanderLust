const mongoose = require('mongoose') ;
const User = require('../models/user.js');

module.exports.signupFormRender = (req, res) => {
    res.render('../views/users/signup') ;
} ;

module.exports.signupUser = async (req, res) =>{
    try{
        let {username,email,password} = req.body ;
        let newUser = new User({username, email}) ;
        let registeredUser = await User.register(newUser,password) ;
        // console.log(registeredUser) ;
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err) ;
            }
            req.flash("success","Welcome to the WanderLust") ;
            res.redirect('/listings') ;
        }) ;
    }catch(err){
        req.flash("error",err.message) ;
        res.redirect('/signup') ;
    }
}

module.exports.loginFormRender = (req, res) => {
    res.render('../views/users/login.ejs');
} ;

module.exports.redirectUser = async (req, res) => {
    req.flash("success", "Welcome to WanderLust");
    const redirectURL = res.locals.redirectURL || '/listings';
    res.redirect(redirectURL);
} ;

module.exports.logoutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged Out");
        res.redirect('/login');
    });
} ;
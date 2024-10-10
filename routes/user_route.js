const express = require('express');
const router = express.Router();
const User = require('../models/user.js') ;
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const { signupUser, signupFormRender, loginFormRender, logoutUser, redirectUser } = require('../controllers/user_controller.js');

router.get("/",(req,res)=>{
    res.redirect("/listings")
}) ;

router.route('/signup')
    .get( signupFormRender) 
    .post( wrapAsync(signupUser)) ;

    
router.route('/login')
    .get( loginFormRender)
    .post(saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: '/login',
            failureFlash: true
        }),
        wrapAsync(redirectUser)
    );

router.get('/logout', logoutUser);


module.exports = router ;
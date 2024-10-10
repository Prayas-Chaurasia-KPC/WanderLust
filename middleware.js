const listing = require('./models/listing.js') ;
const review = require('./models/review.js') ;
const flash = require('connect-flash') ;

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        // Redirecd Url save
        req.session.redirectURL = req.originalUrl ;
        req.flash("error","You need to be logged in to do that") ;
        return res.redirect('/login') ;
      }
      return next() ;
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectURL){
        res.locals.redirectURL = req.session.redirectURL ;
    }
    next() ;
}

module.exports.isOwner = async (req,res,next)=>{
    let { id } = req.params;
      const listID = await listing.findById(id);
      if(!listID.owner.equals(res.locals.currentUser._id)) {
        req.flash("error","You do not have permission to access this") ;
        return res.redirect(`/listings/${id}`) ;
      }
      next() ;
}
module.exports.isReviewOwner = async (req,res,next)=>{
  let { id,reviewID } = req.params;
    const Review = await review.findById(reviewID);
    if(!Review.owner.equals(res.locals.currentUser._id)) {
      req.flash("error","You do not have permission to access this") ;
      return res.redirect(`/listings/${id}`) ;
    }
    next() ;
}
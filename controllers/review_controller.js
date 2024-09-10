const mongoose = require('mongoose') ;
const review = require('../models/review.js');
const listing = require('../models/listing.js');

module.exports.postReview = async (req,res,next)=>{
    let list = await listing.findById(req.params.id);
    let newReview = await review(req.body.review) ;
    newReview.owner = req.user._id ;
    list.reviews.push(newReview) ;
    await newReview.save() ;
    await list.save() ;
    req.flash("success","Review Added!")
    res.redirect(`/listings/${req.params.id}`) ;
  } ; 
module.exports.deleteReview = async (req,res,next)=>{
    let {id, reviewID} = req.params ;
    await listing.findByIdAndUpdate(id, {$pull: {reviews: reviewID}}) ;
    await review.findByIdAndDelete(reviewID) ;
    req.flash("success","Review Deleted!")
    res.redirect(`/listings/${id}`) ;
  } ;

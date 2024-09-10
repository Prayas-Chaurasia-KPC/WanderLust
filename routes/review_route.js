const express = require('express');
const mongoose = require('mongoose') ;
const router = express.Router({mergeParams: true}); 
const listing = require('../models/listing');
const review = require('../models/review.js') ;
const wrapSync = require('../utils/wrapAsync.js') ;
const { isLoggedIn, isReviewOwner } = require('../middleware.js');
const {postReview, deleteReview} = require('../controllers/review_controller.js');

// Reviews Route------------------------------------------------
// Post Route------------------------------------------------
router.post('/',isLoggedIn, wrapSync(postReview))
  // End Post Route------------------------------------------------
  
  // Post Delete Route------------------------------------------------
router.delete('/:reviewID',isLoggedIn,isReviewOwner, wrapSync(deleteReview)) ;

module.exports = router ;
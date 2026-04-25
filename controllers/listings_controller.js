const mongoose = require('mongoose') ;
const listing = require('../models/listing');
const sanitizeHtml = require('sanitize-html'); // <-- ADDED: Import the package

// <-- ADDED: Define allowed tags for the rich text editor
const sanitizeConfig = {
    allowedTags: [ 'b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'span', 'u', 's', 'blockquote' ],
    allowedAttributes: {
        'a': [ 'href' ],
        'span': [ 'style' ],
        'p': [ 'style' ]
    }
};

module.exports.index = async (req, res,next)=>{
    let allListings = await listing.find({}) ;
    res.render('listings/index.ejs',{allListings}) ;
} ;

module.exports.renderNewForm = async (req, res,next) => {
    res.render('listings/new') ;
} ;

module.exports.showEachList = async (req, res) => {
    const { listid } = req.params;
    const listID = await listing.findById(listid)
    .populate({path:"reviews", populate:{path: "owner"}})
    .populate("owner");
    
    if(!listID){
      req.flash("error","Listing Not Found") ;
      return res.redirect('/listings') ;
    }
    res.render('listings/show', { listID });
} ;

module.exports.newListCreated = async (req,res,next)=>{
    const url = req.file.path ;
    const filename = req.file.filename ;
    
    // <-- ADDED: Sanitize the description before we put it in the database
    if (req.body.listing.description) {
        req.body.listing.description = sanitizeHtml(req.body.listing.description, sanitizeConfig);
    }

    const newListing = new listing(req.body.listing) ;
    newListing.owner = req.user._id ; 
    newListing.image = {url, filename} ;
    
    // Fallback just in case genre didn't get mapped inside req.body.listing
    if(req.body.genre) {
        newListing.genre = req.body.genre ;
    }
    
    await newListing.save() ;
    req.flash("success","New Listing Created Successfully") ;
    res.redirect('/listings') ;
} ;

module.exports.editListForm = async (req, res,next) => {
    let { id } = req.params;
    const listID = await listing.findById(id);
    if(!listID) {
      req.flash("error","Listing Not Found") ;
      return res.redirect('/listings') ;
    }
    res.render('listings/edit', { listID });
} ;

module.exports.updateList = async (req, res) => {
    try {
      let { id } = req.params;
      
      // <-- ADDED: Sanitize the description before updating
      if (req.body.listID && req.body.listID.description) {
          req.body.listID.description = sanitizeHtml(req.body.listID.description, sanitizeConfig);
      }

      let updateListing = await listing.findByIdAndUpdate(id, { ...req.body.listID });

      if(typeof req.file !== "undefined") {
        const url = req.file.path ;
        const filename = req.file.filename ;
        updateListing.image = {url, filename} ;
        
        // Handle genre if it was sent outside the listID object
        if(req.body.genre) {
            updateListing.genre = req.body.genre ;
        }
        
        await updateListing.save() ;
      }
      req.flash("success","Listing Edited Succesfully") ;
      res.redirect(`/listings/${id}`);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
} ;

module.exports.deleteList = async (req,res,next)=>{
    let { id } = req.params;
    let deletedListing = await listing.findByIdAndDelete(id); // FIXED: assigned to a variable to check if it existed
    
    if(!deletedListing){
        req.flash("error","Listing your request does not exist") ;
    } else {
        req.flash("success","Listing Deleted Successfully") ;
    }
    
    res.redirect('/listings') ;
} ;

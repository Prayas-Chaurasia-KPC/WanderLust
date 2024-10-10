const mongoose = require('mongoose') ;
const listing = require('../models/listing');

module.exports.index = async (req, res,next)=>{
    let allListings = await listing.find({}) ;
    res.render('listings/index.ejs',{allListings}) ;
} ;

module.exports.renderNewForm = async (req, res,next) => {
    res.render('listings/new') ;
} ;

module.exports.showEachList = async (req, res) => {
    const { listid } = req.params;
    // const listOwner = await listing.findById(listid) ;
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
    const newListing = new listing(req.body.listing) ;
    newListing.owner = req.user._id ; 
    newListing.image = {url, filename} ;
    newListing.genre = req.body.genre ;
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
      let updateListing = await listing.findByIdAndUpdate(id, { ...req.body.listID });

      if(typeof req.file !== "undefined") {
        const url = req.file.path ;
        const filename = req.file.filename ;
        updateListing.image = {url, filename} ;
        updateListing.genre = req.body.genre ;
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
    await listing.findByIdAndDelete(id);
    req.flash("success","Listing Delete Successfully") ;
    if(!listing){
    req.flash("error","Listing your request dose not exist") ;
    }
    res.redirect('/listings') ;
} ;
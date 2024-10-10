const express = require('express');
const router = express.Router();
const listing = require('../models/listing');
const wrapSync = require('../utils/wrapAsync.js') ;
const review = require('../models/review.js') ;
const mongoose = require('mongoose') ;
const {isLoggedIn, isOwner} = require('../middleware.js') ;
const {index, renderNewForm, showEachList, newListCreated, editListForm, updateList, deleteList} = require('../controllers/listings_controller.js');
const multer  = require('multer') ;
const {storage} = require("../cloud-config.js") ;
const upload = multer({ storage }) ;

router.route('/')
    .get(wrapSync(index))
    .post(isLoggedIn,upload.single("listing[image]"),wrapSync(newListCreated)) ;

router.route('/:id')
    .put(isLoggedIn,isOwner,upload.single("listID[image]"), updateList)
    .delete(isLoggedIn,isOwner, wrapSync(deleteList)) ;

router.get('/:listid', wrapSync(showEachList));
router.get('/new/list',isLoggedIn,wrapSync(renderNewForm)) ;  
router.get('/edit/:id',isLoggedIn,isOwner, wrapSync(editListForm));  
// router.get('/',wrapSync(index)) ;
// router.post('/',wrapSync(newListCreated));
// router.put('/:id',isLoggedIn,isOwner, updateList);
// router.delete('/:id',isLoggedIn,isOwner, wrapSync(deleteList)) ;

module.exports = router ;
const mongoose = require('mongoose') ;
const reviewSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    date:{
        type: Date,
        default: Date.now(),
    },
    owner:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});


module.exports  = mongoose.model('Review', reviewSchema) ;

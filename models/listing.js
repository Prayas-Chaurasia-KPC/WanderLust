const mongoose = require('mongoose') ;
const review = require('./review.js') ;

const listingSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must be at least 3 characters long'],
        maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        minlength: [3, 'Location must be at least 3 characters long'],
        maxlength: [100, 'Location cannot exceed 100 characters'],
    },
    country: {
        type: String,
        required: [true, 'Country is required'],
        minlength: [2, 'Country must be at least 2 characters long'],
        maxlength: [100, 'Country cannot exceed 100 characters'],
    },
    reviews:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Review',
        }
    ],
    owner:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

listingSchema.post("findOneAndDelete", async (Listing) => {
    if(Listing){
        await review.deleteMany({_id: {$in: Listing.reviews}}) ;
    }
})

const listing = mongoose.model('Listing', listingSchema) ;
module.exports = listing ;
const mongoose = require('mongoose') ;
const initData = require('./data') ;
const listing = require('../models/listing') ;


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust');
}
main().then(()=>{
    console.log("Connected to DB") ;
}).catch((err)=>{
    console.log("Error connecting to DB",err) ;
})


const initDB = async ()=>{
    await listing.deleteMany({}) ;
    await listing.insertMany(initData.data) ;
    console.log("Data was successfully initialized") ;
} ;

initDB() ;
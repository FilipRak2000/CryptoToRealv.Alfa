const mongoose = require('mongoose')
const Schema = mongoose.Schema

const advertisementSchema  = new Schema({
    title:{
        type: String,
        required: true,
        min: 3,
        max: 100,
    },
    category: String,
    file: String,
    description: String,
    localization: String,
    price: Number,
    telnumber: Number,
    createdAt: {
        type: Date,
        default:() => Date.now(),
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
   
});

const Advertisement = mongoose.model('Advertisement', advertisementSchema)
module.exports = Advertisement


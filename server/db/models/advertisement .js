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
    files: [Object],
    description:{
        type: String,
        min: 10,
        max: 500,
    },
    localization: String,
    price: Number,
    createdAt: {
        type: Date,
        default:() => Date.now(),
    },
    email: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        trim: true,
    },
   
});

const Advertisement = mongoose.model('Advertisement', advertisementSchema)
module.exports = Advertisement


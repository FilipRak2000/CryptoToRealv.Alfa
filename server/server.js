const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')
require('dotenv').config()
const bodyParser = require('body-parser')
const ejsLayouts = require('express-ejs-layouts')
const path = require('path')
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Service')

app.set("view engine", "ejs")
app.set('views', path.join(__dirname + '/views'));
app.use(ejsLayouts)
app.set("layout", './layout/main')




app.use(bodyParser.json())
app.use(express.json())
//routes 
app.use('/api', apiRouter)
app.get("/", (req , res) =>{
    res.render('pages/home')
})

app.get("*", (req, res) =>{
    res.render('errors/404'), {
    layout: 'layout/404error'
    }
})


app.listen(port, function(){
    console.log("server dziala!" + port)
})


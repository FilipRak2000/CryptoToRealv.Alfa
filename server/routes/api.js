const express = require('express')
const AdvertisementController = require('../controllers/AdvertisementsController')
const Advertisement = require('../db/models/advertisement ')
const router = new express.Router()


//pobieranie ogloszen
router.get("/advertisement", async (req,res) =>{
    const advertisements = await Advertisement.find()
    res.json({advertisements})
})


module.exports = router
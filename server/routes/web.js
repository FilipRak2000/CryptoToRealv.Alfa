const express = require('express')

const router = new express.Router()
const HomeController = require('../controllers/HomePageController')
const AdvertisementController = require('../controllers/AdvertisementsController')








router.get("/",  HomeController.showHome )
router.get("/adverse", AdvertisementController.showform )
router.post("/adverse", AdvertisementController.save)



module.exports = router
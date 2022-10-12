const express = require('express')

const router = new express.Router()
const HomeController = require('../controllers/HomePageController')
const AdvertisementController = require('../controllers/AdvertisementsController')
const CategoryControllers = require('../controllers/CategoriesController')

const path = require('path')

const multer = require('multer')
const store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads')
    },
    filename: function(req, file, cb){
        const name = Date.now() + path.extname(file.originalname)
        cb(null, name )
    }
});
const upload = multer({storage: store})








router.get("/",  HomeController.showHome )
router.get("/advertisement/:id", AdvertisementController.showById )
router.get("/add", AdvertisementController.showform)
router.get("/metals", CategoryControllers.showMetals )


router.post("/add", upload.fields([{name: 'files', maxCount:10}]), AdvertisementController.save)



module.exports = router
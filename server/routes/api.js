const express = require('express')
const AdvertisementController = require('../controllers/AdvertisementsController')
const router = express.Router()


//pobieranie ogloszen
router.get("/ogloszenie", AdvertisementController.getAllAdvertisement)
//pobieranie ogloszenia
router.get("/ogloszenie/:id")
//dodawanie ogloszenia
router.post("/nowe-ogloszenie")
//edytowanie ogloszenia
router.put("/ogloszenie/:id")
//usuwanie ogloszenia
router.delete("/ogloszenie/:id")


module.exports = router
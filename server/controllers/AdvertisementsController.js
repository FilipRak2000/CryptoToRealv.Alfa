const Advertisement = require('../db/models/advertisement ')



class AdvertisementControllers  {
    async save(req, res) {
        const newAdvertisement = await new Advertisement ({
            title: "Tytuł",
            category: "Motoryzacja"
        });

        newAdvertisement.save().then(() => {
            console.log("Ogloszenie zapisane!")
        })
    }

    async getAllAdvertisement(req, res) {
        const allAdvertisement = await Advertisement.find({});
        console.log(allAdvertisement);
        res.status(200).json(allAdvertisement)
    }
}

module.exports = new AdvertisementControllers() 
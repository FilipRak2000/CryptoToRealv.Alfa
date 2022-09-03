const Advertisement = require('../db/models/advertisement ')



class AdvertisementControllers  {
    async save(req, res) {
        const advertisement = new Advertisement ({
            title: req.body.title,
            category: req.body.category,
            file: req.body.file,
            description: req.body.description,
            localization: req.body.localization,
            price: req.body.price,
            email: req.body.email
        });

        await advertisement.save();
            console.log(advertisement)
            res.redirect("/")
        

    }

    async getAllAdvertisement(req, res) {
        const allAdvertisement = await Advertisement.find({});
        console.log(allAdvertisement);
        res.status(200).json(allAdvertisement)
    }

     showform(req,res){
        res.render("pages/adverse"),  {
           
        }

    }
}

module.exports = new AdvertisementControllers() 
const Advertisement = require('../db/models/advertisement ')



class AdvertisementControllers  {
    async save(req, res , next) {
        const advertisement = new Advertisement ({
            title: req.body.title,
            category: req.body.category,
            files: req.files.files,
            description: req.body.description,
            localization: req.body.localization,
            price: req.body.price,
            email: req.body.email
        });
        console.log(req.files)
        await advertisement.save();
            console.log(advertisement)
            res.redirect("/")
        
        next()

    };

     showform(req,res){
        res.render("pages/adverse"),  {
           
        }
    };

    async showById(req,res){
        const advertisement = await Advertisement.findById(req.params.id)
        if (advertisement == null) res.redirect("/")
        res.render("pages/advertid" , {advertisement : advertisement} )

    };

    
    }






module.exports = new AdvertisementControllers() 
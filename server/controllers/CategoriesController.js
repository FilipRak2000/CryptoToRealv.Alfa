const Advertisement = require('../db/models/advertisement ')

class CategoryControllers{

async showMetals(req,res){
    let advertisement = await Advertisement.find({category: "Precious metals"})
    if (advertisement == null) res.redirect("/")
    res.render("pages/metals",{advertisement}) 
    
};

}

module.exports = new CategoryControllers() 
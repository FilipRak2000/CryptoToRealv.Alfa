const axios = require('axios');
const { response } = require('express');
let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=false'

    class HomeController{
    async showHome(req,res){
        res.render("pages/home", {btcprice, ethprice}),  {
           
        }

     
}


}

axios.get(url, {

})
.then(function (response) {
    console.log(response)
    btcprice = response.data[0].current_price
    ethprice = response.data[1].current_price
    console.log(ethprice)
})
.catch(function (error) {
  console.log(error);
})
 


    module.exports = new HomeController()
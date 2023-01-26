var sol = document.getElementById("solana");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var ada = document.getElementById("cardano");


var setting = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ccardano&vs_currencies=usd" ,

    "method": "GET",
    "headers": {}

}
$ .ajax (setting).done(function (response){ 
    sol.innerHTML = response.solana.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    ada.innerHTML = response.cardano.usd;
    
    

  

});


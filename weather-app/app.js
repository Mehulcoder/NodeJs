var request = require('request');

var url1 = 'https://api.darksky.net/forecast/3067f598a4ab75bcecd5b3c90ae80cd4/37.8267,-122.4233';
var url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoibWVodWxjb2RlciIsImEiOiJjazg2NTlmMWIwY3JkM2RwZW92aWpwNGF5In0.l6V60pZnHE-GHwhHiKvvBg';

request({url:url1, json:true}, (err, data)=>{
    // var parsedData = JSON.parse(data.body);
    // console.log(data.body.currently);
    console.log("It is currently "+data.body.currently.temperature+" degree Celcius");
});

request({url:url2}, (err, data)=>{
    var parsedData = JSON.parse(data.body);
    // console.log(data.body.currently);
    console.log("We are currently at Lattitude: "+parsedData.features.center[0]+" and Longitude: "+parsedData.features.center[1]);
});
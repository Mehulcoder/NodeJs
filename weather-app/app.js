var request = require('request');

var url = 'https://api.darksky.net/forecast/3067f598a4ab75bcecd5b3c90ae80cd4/37.8267,-122.4233';

request({url:url, json:true}, (err, data)=>{
    // var parsedData = JSON.parse(data.body);
    console.log(data.body.currently);
});
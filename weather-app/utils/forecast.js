var request = require('request');

var forecast = (lat, long, callback)=>{
    var url = 'https://api.darksky.net/forecast/3067f598a4ab75bcecd5b3c90ae80cd4/'+lat+','+long;

    request({url:url, json:true}, (err, {body})=>{
        if (err) {
            callback("Unable to connect to the location", undefined);
            // callback()
        }else if (body.error) {
            // console.log("Invalid Coorinates");
            callback("Invalid Coordintes", undefined);
        }else{
            callback(undefined, {
                temperature: body.currently.temperature
            })
        }
    });
};

module.exports = forecast;
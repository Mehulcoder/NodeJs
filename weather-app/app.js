var request = require('request');
var geoCode = require('./utils/geocode.js');
var forecast = require('./utils/forecast.js');

// var url1 = '';
const address = process.argv[2];
if (!address) {
    console.log("Please provie address");
}else{
    geoCode(address, (err, {lattitude, longitude, location})=>{
        if (err) {
            console.log('Error', err);
        }else{
            forecast(lattitude, longitude, (error, forecastData) => {
                if (error) {
                    console.log('Error', error);
                }else{
                    console.log(location, forecastData);
                }
            });
        }
        
    });
    
}


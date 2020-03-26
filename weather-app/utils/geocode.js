var request = require('request');

var geoCode = (address, callback)=>{
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?types=country&access_token=pk.eyJ1IjoibWVodWxjb2RlciIsImEiOiJjazg2NTlmMWIwY3JkM2RwZW92aWpwNGF5In0.l6V60pZnHE-GHwhHiKvvBg';

    request({url:url, json:true}, (error, {body})=>{
        if (error) {
            callback('Unable to connect to the location', undefined);
        }else if(body.features.length===0){
            callback('Unable to find the location', undefined);
        }else{
            var lat = body.features[0].center[1];
            var long = body.features[0].center[0];
            callback(undefined, {
                lattitude: lat,
                longitude: long,
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geoCode
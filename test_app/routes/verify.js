
//open database

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/location');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('database connection open');
});

var geocoderProvider = 'google';
var httpAdapter = 'http';

var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter);


//Read input from form 

exports.verifyaddress = function(req, res){
	var door_Number_Var = req.body.doorNumber;
	var street_Name_Var = req.body.streetName;
	var town_Name_Var = req.body.townName;
	var city_Name_Var = req.body.cityName;
	var postcode_Var = req.body.postcode;

//Create full address variable
var fullAddress = door_Number_Var + " " + street_Name_Var + " " + town_Name_Var + " " + 
city_Name_Var + " " + postcode_Var;

geocoder.geocode(fullAddress, function(err, coords) {
	//extract longitude & latitude

	var lat = coords[0].latitude.toFixed(2);
	var lon = coords[0].longitude.toFixed(2);
	var currentLat = Number(req.body.latitude).toFixed(2);
	var currentLong = Number(req.body.longitude).toFixed(2);


	console.log("Address Latitude:" + " " + lat + " " + "Address Longitude:" + " " + lon);
	console.log("Current Latitude: " + " " + currentLat + " " + "Current Longtitude:" + " " + currentLong);

	console.log(matchCoordinates(lat,lon,currentLat,currentLong));

	function matchCoordinates(lat,lon,currentLat,currentLong){
		if (lat === currentLat){
			if (lon === currentLong) { 
				x = "latitudes & longitudes match";
			}
			else{
				x = "Verification Failed";
			}
		}
		else{
			x = "Verification Failed";
		}
		return x;
	}


});


};

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

	lat = coords[0].latitude.toFixed(4);
	long = coords[0].longitude.toFixed(4);

    console.log("latitude:" + " " + lat + " " + "longitude:" + " " + long);
});

};
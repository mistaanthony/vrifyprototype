    
    function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(sendLocation);
    }
  else{console.log('do nothing');}
  
function sendLocation(position)
  {

  var latVar = position.coords.latitude;
  var longVar = position.coords.longitude;


        $(document).ready(function(){


  $( "#latitudeInput" ).val( latVar ), $( "#longitudeInput" ).val( longVar );

  $('#continue-verification-button').show();

  $('#begin-verification-buttton').hide();

 });

}
}
  
        $(document).ready(function(){

          $( "#begin-verification-buttton" ).click(function() {
 $( "#begin-verification-buttton" ).html('<i class="fa fa-refresh fa-spin"></i>');
  getLocation();
});

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




  $( "#latitudeInput" ).val( latVar ), $( "#longitudeInput" ).val( longVar );

  $('#continue-verification-button').show();

  $('#begin-verification-buttton').hide();



}
}

 });
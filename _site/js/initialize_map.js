
function initialize() {
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
		center: new google.maps.LatLng(33.4604138, -3.9697522),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	}
	var map = new google.maps.Map(map_canvas, map_options);
}
google.maps.event.addDomListener(window, 'load', initialize); 



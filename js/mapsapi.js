//Functions:

// Add a marker to the map and push to the array.
function addMarker(toAdd)
{
	//Add Marker
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(toAdd.lat,toAdd.long),
		map: map,
		icon:toAdd.icon
	});	
	markers.push(marker);
	
	//Add info on click
	var infoWindowOptions = 
	{
		content: "<div id=\"mapdiv\">" + toAdd.dsc + "<\/div>"
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	google.maps.event.addListener(marker,'click',function(e){
		infoWindow.setContent(infoWindow.getContent())
		infoWindow.open(map, marker);	  
	}
	);
}

// Sets the map on all markers in the array.
function setAllMap(map) 
{
	for (var i = 0; i < markers.length; i++) 
	{
		markers[i].setMap(map);
	}
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
	setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
	setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
	clearMarkers();
	markers = [];
}

function refreshMarks(marksArray)
{
	deleteMarkers();
	for (var i=0;i<marksArray.length;i++)
	{		
		addMarker(marksArray[i]);
	}
	showMarkers();	
}


// main

var markers=[];
//TODO: Add style
var mapOptions = 
{
    center: new google.maps.LatLng(32.797242, 34.992915),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}],
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCenterPosition);
    }
}

function setCenterPosition(position) 
{
    map.setCenter(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
}
var acOptions =
{
	types: ['(cities)']
};

var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
autocomplete.bindTo('bounds',map);
var infoWindow = new google.maps.InfoWindow();
getLocation();
google.maps.event.addListener(autocomplete, 'place_changed', function() 
{
	infoWindow.close();
	var place = autocomplete.getPlace();
	if (place.geometry.viewport)
	{
		map.fitBounds(place.geometry.viewport);
	} 
	else 
	{	
		map.setCenter(place.geometry.location);
		map.setZoom(17);
	}
});
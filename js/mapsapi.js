


//Functions:


// Add a marker to the map and push to the array.
function addMarker(toAdd)
{
	//TODO: Add Description
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(toAdd.lat,toAdd.long),
		map: map
  });
	markers.push(marker);
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


// To be run

var markers=[];
var mapOptions = 
{
    center: new google.maps.LatLng(44,44),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
var acOptions =
{
	types: ['establishment']
};

var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
autocomplete.bindTo('bounds',map);
var infoWindow = new google.maps.InfoWindow();

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
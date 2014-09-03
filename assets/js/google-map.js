/* google maps -----------------------------------------------------*/
var locations = [];
var map,
    marker,
    infowindow;

function initialize() {
    infowindow = new google.maps.InfoWindow();
    
    var myOptions = {
        zoom: 12,
        center: new google.maps.LatLng(3.07787,101.588367),
        mapTypeControl: true,
        navigationControl: true,
    }
    map = new google.maps.Map(document.getElementById("map-placement"), myOptions);

    add_location('#FB LOCATION#', 3.07787,101.588367);
    set_current_location();
    //set_markers(new google.maps.LatLngBounds(), map);
}

// add new location to the locations array
function add_location(description, lastitude, longtitude) {
    locations.push([description, lastitude, longtitude]);
    console.log('#locations: ' + locations.length);
    console.log(locations);  
}

// Set all the markers in the location arrays and bound/frame the map
function set_markers(bounds, map) {
    console.log('#locations: ' + locations.length);
    console.log(bounds);
    
    for (var i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
        bounds.extend(marker.position);
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    map.fitBounds(bounds);
}

// Get current location based on the IP Address
function set_current_location() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            /*
            var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);
            var myLat = position.coords.latitude;
            var myLong = position.coords.longitude;
            */
            add_location('My location', 
                        position.coords.latitude, 
                        position.coords.longitude);
                        
            set_markers(new google.maps.LatLngBounds(), map);
        }, function error(err) {
            console.log('error: ' + err.message);
            set_markers(new google.maps.LatLngBounds(), map);            
        });
    } else {
        alert("Geolocation is not supported by this browser.");
        //set_markers(new google.maps.LatLngBounds(), map);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
/* end google maps -----------------------------------------------------*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 37.3382,
      lng: -121.8863
    },
    zoom: 8
  });
  getLocation();
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  // map.setCenter(new google.maps.LatLng(37.790841, -122.401280));
  map.setZoom(16);
  var image = "img/dot.png";
  var marker = new google.maps.Marker({
    position: {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    },
    map: map,
    title: 'You are here!',
    icon: image
  });
  // var marker = new google.maps.Marker({
  //   position: {
  //     lat: 37.790841,
  //     lng: -122.401280
  //   },
  //   map: map,
  //   title: 'You are here!',
  //   icon: image
  // });
  updateLocations();
}


var locations = document.querySelector(".locations");

function updateLocations() {
  bathrooms.forEach(createBathroom);
}

function createBathroom(bathrooms) {
  var li = document.createElement("li");
  var span = document.createElement("span");
  var h3 = document.createElement("h3");
  var p = document.createElement("p");

  span.textContent= bathrooms.rating;
  span.className = bathrooms.class;
  h3.textContent = bathrooms.name;
  p.textContent = bathrooms.streetAddress;

  li.appendChild(span);
  li.appendChild(h3);
  li.appendChild(p);
  locations.appendChild(li);

  var infowindow = new google.maps.InfoWindow({
    content: bathrooms.name + "<br>" + bathrooms.streetAddress
  });

  var marker = new google.maps.Marker({
    position: {
      lat: bathrooms.lat,
      lng: bathrooms.lng
    },
    map: map,
  });

  marker.addListener('click', function() {
   infowindow.open(map, marker);
 });
}

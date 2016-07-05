var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
    map.setCenter([position.coords.longitude, position.coords.latitude]);
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhY2VnaXJseG1vIiwiYSI6ImNpcHFiM28wYTA1b21mbW5jdXQ5NXh3MzAifQ.pQqsTB1XcyIa-mwLj5Fy8g';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
center: [-89, 89], // starting position
zoom: 14 // starting zoom
});

getLocation();

// Markup

var fahrenheit = document.querySelector(".fahrenheit");
var convert = document.querySelector(".convert");

// Events

convert.addEventListener("click", fahrenheitToCelsius);


//Event Handlers

function fahrenheitToCelsius() {
  console.log("fn fahrenheitToCelsius");

  //get data from page
  var x = parseInt(fahrenheit.value);
  console.log("x:", x)

  //do some work/processing
  var z = 3 * x;
  //update the page
  fahrenheit.value = z;
}

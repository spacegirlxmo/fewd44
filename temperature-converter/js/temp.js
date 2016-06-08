// Markup

var fahrenheit = document.querySelector(".fahrenheit");
var celsius = document.querySelector(".celsius");

// Events

fahrenheit.addEventListener("input", fahrenheitToCelsius);
celsius.addEventListener("input", celsiusToFahrenheit);


//Event Handlers

function fahrenheitToCelsius() {
  console.log("fn fahrenheitToCelsius");

  //get data from page
  var fahrenheitInput = parseInt(fahrenheit.value);
  console.log("Temp:", fahrenheitInput);

  //do some work/processing
  var celsiusConvert = (fahrenheitInput - 32) * 5 / 9;
  celsiusConvert = celsiusConvert.toPrecision(3);

  //update the page
  celsius.value = celsiusConvert;
}

function celsiusToFahrenheit() {
  
  console.log("fn celsiusToFahrenheit");

  //get data from page
  var celsiusInput = parseInt(celsius.value);
  console.log("Temp:", celsiusInput);

  //do some work/processing
  var fahrenheitConvert = (celsiusInput * 9) /  5 + 32;
  fahrenheitConvert = fahrenheitConvert.toPrecision(3);

  //update the page
  fahrenheit.value = fahrenheitConvert;
}

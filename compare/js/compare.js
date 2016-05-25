// Structure

var firstNumber = document.querySelector(".first-number");
var secondNumber = document.querySelector(".second-number");
var sign = document.querySelector(".sign");
var compare = document.querySelector(".compare");

// Events
compare.addEventListener("click", compareNumbers);

// Listen for the compare button to be clicked

// Compare the first and second number

// Event Handlers
// -------------------------
// Update the page - Change the sign
function compareNumbers () {

  var firstValue = firstNumber.value;
  firstValue = parseInt(firstValue);

  var secondValue = secondNumber.value;
  secondValue = parseInt(secondValue);

  // JS Conditional (if, else if, else)
  if (firstValue > secondValue) {
    sign.textContent = ">";
  } else if (firstValue < secondValue) {
    sign.textContent = "<";
  }
}

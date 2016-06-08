// Structure
// ------------------------------------------------
var entries = document.querySelector(".entries");
var input = document.querySelector(".input");
var total = document.querySelector(".total");
// Setup
// ------------------------------------------------
var itemList = [];

// Events
// ------------------------------------------------
input.addEventListener("keypress", onKeyPress, false);

// Event handler functions
// ------------------------------------------------
//when you press a key an event is being generated. this will run and
//the browser function will run. it will call mine first and then the browser

function onKeyPress(e) {

  console.log("fn onKeyPress");

  if (e.keyCode === 13) {
    e.preventDefault();
    itemList.push(input.value);
    //add item of whatever input.value
    updateTotal();
    createItem(input.value);
    //you have to pass through something into the createItem function
    input.value="";
  }
}

function createItem(price) {
  var li = document.createElement('li');
  li.textContent = "$" + price;
  entries.appendChild(li);
}

//Update page functions
//------------------------------------------------
function updateTotal() {
  var finalTotal = 0;
  for(var i = 0; i < itemList.length; i = i + 1) {
    finalTotal = finalTotal + parseFloat(itemList[i])
    //specifying this element of the itemList array
  }
  total.textContent = "$" + finalTotal.toFixed(2);
}


// function updateTotal() {
//   var finalTotal = 0;
//   //forEach means the (global) function is called for each item in the itemList array
//   //function(item) is called once per iteration
//   //forEach internally does what the for loop does. it gives you the element without manually doing it
//   itemList.forEach(function(item) {
//     finalTotal = finalTotal + parseFloat(item)
//   })
//   total.textContent = "$" + finalTotal.toFixed(2);
// }

// Utility functions
// ------------------------------------------------

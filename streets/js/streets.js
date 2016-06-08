//Structure

var input = document.querySelector("input");
var button = document.querySelector("button");
var directions = document.querySelector(".directions");

//Setup

var streets = [];

//Event

button.addEventListener("click", addStreet);

//Event Handler Fn

function addStreet(e) {

  console.log("fn addStreet");
  console.log(e);

  e.preventDefault();

  streets.push(input.value);

}

//Update Page

function createStreet(name) {
  var li = document.createElement("li");
  li.textContent = "Mission";
  directions.appendChild(li);
}

//Structure
var parent = document.querySelector(".sponsored-articles")

//Event Handler
function createItem() {

// Step1 : Create
  var child = document.createElement("li");

//Step 2: bedazzle (add content & attr)
  child.textContent = "Trump wins 37 states! New USA PREZ!";
  child.classList.add("new");
  child.setAttribute("src", "img/logo.jpg");

//Step 3: add to DOM tree
  parent.appendChild(child);

}

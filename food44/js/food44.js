var results = document.querySelector(".results");


//Update page

function createRestaurant(restaurant) {
  var li = document.createElement("li");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");

  h2.textContent = restaurant.name;
  p.textContent = restaurant.street_address;

  li.appendChild(h2);
  li.appendChild(p);
  results.appendChild(li);
}

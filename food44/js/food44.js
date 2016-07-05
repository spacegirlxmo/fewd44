var results = document.querySelector(".results");


//Update page

function updateRestaurants() {
  restaurants.forEach(createRestaurant);
}

function createRestaurant(restaurant) {
  var li = document.createElement("li");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");
  var a = document.createElement("a");

  h2.textContent = restaurant.name;
  p.textContent = restaurant.street_address;
  a.textContent = restaurant.phone_number;
  a.setAttribute("href", "tel: 415");

  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(a);
  results.appendChild(li);
}

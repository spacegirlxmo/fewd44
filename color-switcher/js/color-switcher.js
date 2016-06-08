var body = document.querySelector("body");

var aquamarine = document.querySelector(".aquamarine");
var darkseagreen = document.querySelector(".darkseagreen");
var lightseagreen = document.querySelector(".lightseagreen");
var mediumturquoise = document.querySelector(".mediumturquoise");
var paleturquoise = document.querySelector(".paleturquoise");

var textTheme = document.querySelector(".text-theme");

function bodyColorChanger(color) {
  body.className = color;
}

//Events

aquamarine.addEventListener('click', changeThemeAquamarine);
darkseagreen.addEventListener('click', changeThemeDarkseagreen);
lightseagreen.addEventListener('click', changeThemeLightseagreen);
mediumturquoise.addEventListener('click', changeThemeMediumturquoise);
paleturquoise.addEventListener('click', changeThemePaleturquoise);


function changeThemeAquamarine() {
  console.log("fn changeThemeAquamarine");
  body.className = "aquamarine";
  textTheme.textContent = "Aquamarine"
}

function changeThemeDarkseagreen() {
  console.log("fn changeThemeDarkseagreen");
  body.className = "darkseagreen";
  textTheme.textContent = "Dark Sea Green"
}

function changeThemeLightseagreen() {
  console.log("fn changeThemeLightseagreen");
  body.className = "lightseagreen";
  textTheme.textContent = "Light Sea Green"
}

function changeThemeMediumturquoise() {
  console.log("fn changeThemeMediumturquoise");
  body.className = "mediumturquoise";
  textTheme.textContent = "Medium Turquoise"
}

function changeThemePaleturquoise() {
  console.log("fn changeThemePaleturquoise");
  body.className = "paleturquoise";
  textTheme.textContent = "Pale Turquoise"
}

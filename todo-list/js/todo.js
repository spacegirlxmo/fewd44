var taskItem = document.querySelector(".task");
var taskDate = document.querySelector(".date");
var addButton = document.querySelector(".add-button");
var itemList = document.querySelector(".item-list");

addButton.addEventListener("click", onButtonClick, false);

function onButtonClick(event) {
  var li = document.createElement('li');
  var check = "<input class='check' type='checkbox'>";
  var inputTask = "<span class='input-task'>" + taskItem.value + "</span>";
  var inputDate = "<span class='input-date'>" + taskDate.value + "</span>";
  //innerHTML, instead of taking in text string, it takes in html
  li.innerHTML = check + inputTask + inputDate;
  itemList.appendChild(li);
}

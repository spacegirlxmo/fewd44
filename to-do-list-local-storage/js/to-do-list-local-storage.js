
// Structure
// ------------------------------------------------
var input = document.querySelector(".task-item");
var taskButton = document.querySelector("button");
var itemsList = document.querySelector(".items");
var date = document.querySelector(".date");

// SETUP

var todoList = {
	tasks: []
}

// Events
// ------------------------------------------------
taskButton.addEventListener("click", submitForm);
window.addEventListener("load", reloadPage);

// Events
// -----------------------------------------------

//rebuild todo list when page is reloaded
function reloadPage(event) {

//get saved sdata from local storage, convert to JSON
//save it back into the JSON object(todoList)
	todoList = JSON.parse(localStorage.getItem('todoList'))
	createTodoList();
}


function submitForm(e) {
	var task = {
		name: input.value,
		date: date.value,
		completed: false
	};

	todoList.tasks.push(task);

	//save to local storage
	localStorage.setItem("todoList", JSON.stringify(todoList));


	createTodoList();

}




// Update Page
// ------------------------------------------------

//create the entire todo list from json data
function createTodoList() {
	itemsList.innerHTML = "";
	todoList.tasks.forEach(createTask);
}

//create one li on the page from a task object
function createTask(task) {

	console.log(task);


//create markup
	var addLi = document.createElement("li");
	var checkbox = document.createElement("input");
	var labelTask = document.createElement("label");
	var labelDate = document.createElement("label");

//bedazzle markup: add attributes content
	checkbox.setAttribute("type", "checkbox");

	if (task.completed === true) {
		checkbox.checked = true;
	}

	labelTask.textContent = task.name;
	labelDate.textContent = "(" + task.date + ")";
	labelDate.classList.add("gray");

//append new elements to DOM tree
	itemsList.appendChild(addLi);
	addLi.appendChild(checkbox);
	addLi.appendChild(labelTask);
	addLi.appendChild(labelDate);
}

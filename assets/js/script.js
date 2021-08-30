// variable for the #save-task button
var buttonEl = document.querySelector("#save-task");
// varible for the list of tasks
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to create a new li element
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

// when the #save-task button is clicked, a new li element will be created
buttonEl.addEventListener("click", createTaskHandler);
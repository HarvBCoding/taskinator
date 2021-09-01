// variable to select the form element
var formEl = document.querySelector("#task-form")
// varible for the list of tasks
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to create a new li element
var taskFormHandler = function() {

    // prevents page from refreshing once the submit button/enter key are pressed
    event.preventDefault();

    // variable to target the task name input from user
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // variable to target the task type from user
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);
    
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

// when the #save-task button is clicked, a new li element will be created
formEl.addEventListener("submit", taskFormHandler);
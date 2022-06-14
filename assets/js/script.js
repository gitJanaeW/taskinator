var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// You can use query selector to select an HTMl element by one of its attributes using [attribute='attr-name']

var taskFormHandler = function(event){
    
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check for no user input
    if(!taskNameInput === "" || !taskTypeInput === ""){
        alert("You need to fill out the task form!");
        return false;
    }

    // reset form
    formEl.reset();
    document.querySelector("input[name='task-name']").value = "";
    document.querySelector("select[name='task-type']").selectedIndex = 0;

    // package up data as an objec
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // Send it as an argument to createTaskEl
    createTaskEl(taskDataObj);

};

var createTaskEl = function(taskDataObj){
    // Create a new task item with createElement()
    var listItemEl = document.createElement("li");
    // Assign a class name to listItemEl with className
    listItemEl.className = "task-item";

    // Create a div that will appear under the task's name on the webpage
    var taskInfoEl = document.createElement("div");
    // Give the div a clss name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    // Append the new task to the ul
    listItemEl.appendChild(taskInfoEl);
    
    // Place the new task by appending it as a ul child in the HTML with appendChild()
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
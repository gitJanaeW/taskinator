var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(){
    // Create a new task item with createElement()
    var listItemEl = document.createElement("li");
    // Assign a class name to listItemEl with className
    listItemEl.className = "task-item";
    // Create text for new task with textContent (more secure that innerHTML)
    listItemEl.textContent = "This is a new task.";
    // Place the new task somewhere by appending it as a ul child in the HTML with appendChild()
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);
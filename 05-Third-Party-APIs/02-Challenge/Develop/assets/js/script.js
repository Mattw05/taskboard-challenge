// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));


// Todo: create a function to generate a unique task id
function generateTaskId() {
    return taskList.length > 0 ? Math.max(...taskList.map(task => task.id)) + 1 : 1;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

    const taskCard = document.createElement("div");
    taskCard.classList.add('task-card');
    taskCard.setAttribute('data-task-id', task.id);
    taskCard.draggable = true;
    setColor(taskCard, task);
    
    taskCard.innerHTML = `
    <div class="card mb-1">
        <div class="card-header">${task.title}</div>
        <div class="card-body">
            <p class="card-text">${task.description}</p>
            <p class="card-text">${task.dueDate}</p>
            <button type="button" class="btn btn-danger delete-task-btn">Delete</button>
        </div>
    </div>
`;

    document.getElementById('todo-cards').appendChild(taskCard);

  return taskCard



}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    // Clear the exisiting cards
    document.querySelectorAll('task-card').forEach(card => remove());

    // Rener task cards
    let taskCol;
    if(task.status === 'to-do'){
        taskCol = document.getElementById('to-do');
    } else if (task.status === 'in-progress'){
        taskCol = document.getElementById('in-progress');
    } else if(task.status === 'done'){
        taskCol = document.getElementById('done');
    }


    // check if swim lane container exists
    if(taskCol){

        // Create task card
        const taskCard = createTaskCard(task);

        // Append
        taskCol.querySelector('.card-body').appendChild(taskCard);
    }else {
        console.log('no task found ')
    }

    


    }
    



// Todo: create a function to handle adding a new task
function handleAddTask(event){
// Prevent derfault behavior
event.preventDefualt();

// Get form inputs
const title = document.getElementById('task-title').value;
const dueDate = document.getElementById('task-due-date').value;
const description = document.getElementById('task-description').value;

// Create a mew tasl object
const newTask = {
    id: generateTaskId(), // generates a unique id
    title: title,
    dueDate: dueDate,
    description: description,
    status: 'to-do', // sets the initial value
};


// Add new task to the taskList array
taskList.push(newTask);

// Update local storage
localStorage.setItem('tasks', JSON.stringify(taskList));

renderTaskList();

// Hide from after rendering task 
$(`#formModal`).modal('hide');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

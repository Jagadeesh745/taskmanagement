const taskInput = document.getElementById('task-input');
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add Task Event
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    addTask(taskText);
    taskInput.value = ''; // Clear input after adding task
});

// Function to Add a Task
function addTask(taskText) {
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);

    // Mark task as completed
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Delete task
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadTasksFromLocalStorage();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const taskItem = document.createElement('div');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Удалить</button>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = '';

        saveTasksToLocalStorage();
    }
}

function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling; 
    taskText.classList.toggle('completed');

    saveTasksToLocalStorage();
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();

    saveTasksToLocalStorage();
}

function loadTasksFromLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(taskText => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Удалить</button>
        `;

        taskList.appendChild(taskItem);
    });
}

function saveTasksToLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.getElementsByClassName('task')).map(task => {
        return task.querySelector('span').innerText;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

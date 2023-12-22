document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const taskTemplate = document.getElementById('taskTemplate');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask(taskList, taskTemplate);
    });

    loadTasksFromLocalStorage(taskList, taskTemplate);
});

function addTask(taskList, taskTemplate) {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.importNode(taskTemplate.content, true);

        const spanElement = taskItem.querySelector('span');
        spanElement.textContent = taskText;

        taskList.appendChild(taskItem);

        taskInput.value = '';

        saveTasksToLocalStorage(taskList);
    }
}

document.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('task-checkbox')) {
        toggleTask(target);
    } else if (target.classList.contains('delete-button')) {
        deleteTask(target);
    }
});

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

function loadTasksFromLocalStorage(taskList, taskTemplate) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const taskItem = document.importNode(taskTemplate.content, true);

        const spanElement = taskItem.querySelector('span');
        spanElement.textContent = task.text;

        if (task.completed) {
            spanElement.classList.add('completed');
            const checkbox = taskItem.querySelector('.task-checkbox');
            checkbox.checked = true;
        }

        taskList.appendChild(taskItem);
    });
}

function saveTasksToLocalStorage() {
    const tasks = Array.from(document.getElementsByClassName('task')).map(task => {
        const spanElement = task.querySelector('span');
        const isCompleted = spanElement.classList.contains('completed');
        return { text: spanElement.innerText, completed: isCompleted };
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

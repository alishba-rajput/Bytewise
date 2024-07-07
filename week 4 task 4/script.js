document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const allTasksButton = document.getElementById('all-tasks-button');
    const completedTasksButton = document.getElementById('completed-tasks-button');
    const pendingTasksButton = document.getElementById('pending-tasks-button');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            taskItem.classList.toggle('completed', checkbox.checked);
        });

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function filterTasks(filter) {
        const tasks = taskList.getElementsByTagName('li');
        for (let task of tasks) {
            switch (filter) {
                case 'all':
                    task.style.display = '';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? '' : 'none';
                    break;
                case 'pending':
                    task.style.display = task.classList.contains('completed') ? 'none' : '';
                    break;
            }
        }
    }

    allTasksButton.addEventListener('click', () => filterTasks('all'));
    completedTasksButton.addEventListener('click', () => filterTasks('completed'));
    pendingTasksButton.addEventListener('click', () => filterTasks('pending'));
});

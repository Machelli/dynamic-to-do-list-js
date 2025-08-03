document.addEventListener('DOMContentLoaded', function() {

  
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    
    function saveTasksToLocalStorage() {
        const tasks = [];
     
        taskList.querySelectorAll('li').forEach(item => {
            t
            const taskText = item.firstChild.textContent;
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    function createTaskElement(taskText) {
        const newLi = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        newLi.appendChild(textSpan);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = function() {
            taskList.removeChild(newLi);
            saveTasksToLocalStorage(); 
        };

        newLi.appendChild(removeBtn);
        return newLi;
    }

   
    function loadTasks() {
       
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            const newTask = createTaskElement(taskText);
            taskList.appendChild(newTask);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        
        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);
        
        saveTasksToLocalStorage();

     
        taskInput.value = "";
    }
    
   
    loadTasks();
    
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
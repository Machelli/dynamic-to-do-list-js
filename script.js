
document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
    
        const taskText = taskInput.value.trim();

        
        if (taskText === "") {
            alert("Please enter a task.");
            return; 
        }
        
        const newLi = document.createElement('li');
        newLi.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';
n
        removeBtn.onclick = function() {
            
            taskList.removeChild(newLi);
        };

        newLi.appendChild(removeBtn);

        
        taskList.appendChild(newLi);

        
        taskInput.value = "";
    }

    
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


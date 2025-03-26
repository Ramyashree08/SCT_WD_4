const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskDateInput = document.getElementById('task-date');
const taskList = document.getElementById('task-list');

// Function to add a new task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = taskInput.value;
  const taskDate = taskDateInput.value;

  // Create a task item
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  taskItem.innerHTML = `
    <span>${taskText} ${taskDate ? `| ${taskDate}` : ''}</span>
    <div class="task-controls">
      <button class="complete-btn">Complete</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Add task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input fields
  taskInput.value = '';
  taskDateInput.value = '';

  addTaskListeners(taskItem);
});

// Function to add event listeners to a task
function addTaskListeners(taskItem) {
  const completeBtn = taskItem.querySelector('.complete-btn');
  const editBtn = taskItem.querySelector('.edit-btn');
  const deleteBtn = taskItem.querySelector('.delete-btn');

  // Mark task as completed
  completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Edit task
  editBtn.addEventListener('click', () => {
    const taskText = taskItem.querySelector('span').innerText.split(' | ')[0];
    taskInput.value = taskText;
    taskList.removeChild(taskItem);
  });

  // Delete task
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
}

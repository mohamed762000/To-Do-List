const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
});

function addTask(task) {
  const li = document.createElement("li");
  li.innerHTML = task;
  const modifyBtn = document.createElement("button");
  modifyBtn.innerHTML = "Modify";
  modifyBtn.classList.add("modify-btn");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delete-btn");
  li.appendChild(modifyBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });
  modifyBtn.addEventListener("click", function() {
    const newTask = prompt("Enter new task");
    li.innerHTML = newTask;
    li.appendChild(modifyBtn);
    li.appendChild(deleteBtn);
  });
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });
}





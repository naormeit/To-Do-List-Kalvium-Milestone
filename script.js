document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create new list item
  const li = document.createElement("li");

  // Create span for task text
  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  // Done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.classList.add("complete-btn");
  doneBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.backgroundColor = "#f1c40f";
  editBtn.style.color = "#fff";
  editBtn.style.marginLeft = "10px";
  editBtn.onclick = function () {
    if (editBtn.textContent === "Edit") {
      // Switch to edit mode
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      input.style.flex = "1";
      li.insertBefore(input, span);
      li.removeChild(span);
      editBtn.textContent = "Save";
    } else {
      // Save mode
      const input = li.querySelector("input[type='text']");
      if (input.value.trim() === "") {
        alert("Task cannot be empty.");
        return;
      }
      span.textContent = input.value.trim();
      li.insertBefore(span, input);
      li.removeChild(input);
      editBtn.textContent = "Edit";
    }
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  // Add buttons to the list item
  li.appendChild(doneBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add list item to the list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
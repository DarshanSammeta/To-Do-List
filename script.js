const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents page refresh
  const taskTitle = taskInput.value.trim();

  if (taskTitle == "") {
    alert("Please Enter Task");
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = taskTitle;
    taskList.append(listItem);
    let span = document.createElement("span");
    span.innerHTML = `&times;`;
    listItem.appendChild(span);
    taskInput.value = ""; // Clear the input field
    saveListData();
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveListData();
  }

  if (e.target.tagName == "SPAN") {
    const li = e.target.parentElement;
    li.remove();
    saveListData();
  }
});

function showListData() {
  taskList.innerHTML = localStorage.getItem("listItem");
}

function saveListData() {
  localStorage.setItem("listItem", taskList.innerHTML);
}

showListData();

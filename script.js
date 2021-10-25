let todoList = [];
const todoListContainer = document.querySelector('.todo-list__list');

function addToList() {
  let addTask = document.getElementById('addTask').value;
  if (addTask == '' || todoList.includes(addTask)) {
    alert('Duplicate or Empty Note not allowed');
    return;
  }
  todoList.push(addTask);
  console.log(addTask.length);
  todoListContainer.innerHTML += `<div id=${todoList.length - 1} class="todo-list__element">
  <div class="todo-list__element__task">${addTask}</div>
  <button onclick="deleteFromList(${
    todoList.length - 1
  })" class="todo-list__element__delete  btn btn--orange">⚔</button>
</div>`;
  console.log(todoList);
}

function deleteFromList(taskId) {
  let elementToDelete = document.getElementById(taskId);
  elementToDelete.remove();
  todoList.splice(taskId, 1);
  console.log(todoList);
}

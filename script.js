const ordenedList = document.getElementById('list-tasks');
const inputButton = document.getElementById('create-task');
let taskItem;
// let itemListFull;

// Create task item
function createItem() {
  const itemList = document.createElement('li');
  const taskText = document.getElementById('text-task');
  taskItem = document.createTextNode(taskText.value);
  itemList.appendChild(taskItem);
  ordenedList.appendChild(itemList);
  taskText.value = '';
}

inputButton.addEventListener('click', createItem);

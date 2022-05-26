const ordenedList = document.getElementById('list-tasks');
const inputButton = document.getElementById('create-task');
let itensArray;
let item;
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

// Add background task item
function itemBgClick(event) {
  for (let index = 0; index < item.length; index += 1) {
    itensArray = item[index];
    itensArray.style.backgroundColor = 'white';
    itensArray.classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128 128 128)';
  event.target.classList.add('selected');
}

// Crossed off when double-clicked
function crossedOff(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// Add event listener in the all task items
function forItens() {
  item = document.querySelectorAll('#list-tasks li');
  for (let index = 0; index < item.length; index += 1) {
    itensArray = item[index];
  }
  itensArray.addEventListener('click', itemBgClick);
  itensArray.addEventListener('dblclick', crossedOff);
}

inputButton.addEventListener('click', forItens);

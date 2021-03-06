const ordenedList = document.getElementById('list-tasks');
const inputButton = document.getElementById('create-task');
const deleteButton = document.getElementById('clear-all');
const deleteFinalizedButton = document.getElementById('remove-finished');
const deleteSelectedButton = document.getElementById('remove-selected');
const saveLocalStoreButton = document.getElementById('save-tasks');
const up = document.getElementById('move-up');
const down = document.getElementById('move-down');
const currentDate = document.getElementById('current-date');
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
    itensArray.style.backgroundColor = 'rgba(0, 150, 136, 0.1)';
    itensArray.classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(0 150 136 / 23%)';
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

// let savedTaskItems;

// Delete all task items
function deleteAll() {
  const itemListTasks = document.querySelectorAll('li');
  for (let index = 0; index < itemListTasks.length; index += 1) {
    const allItems = itemListTasks[index];
    allItems.remove();
  }
}

deleteButton.addEventListener('click', deleteAll);

// Delete finished tasks
function deleteFinalized() {
  const finalized = document.querySelectorAll('.completed');
  for (let index = 0; index < finalized.length; index += 1) {
    const finalizedArray = finalized[index];
    finalizedArray.remove();
  }
}

deleteFinalizedButton.addEventListener('click', deleteFinalized);

let savedTask = localStorage.getItem('tasks');
function localStore() {
  localStorage.setItem('tasks', ordenedList.innerHTML);
  console.log(savedTask);
}

saveLocalStoreButton.addEventListener('click', localStore);

if (savedTask === undefined) {
  savedTask = document.createElement('li');
} else {
  ordenedList.innerHTML = savedTask;
}

// Delete selected tasks
let selectedArray;
function deleteSelected() {
  for (let index2 = 0; index2 < item.length; index2 += 1) {
    selectedArray = item[index2];
    if (selectedArray.classList.contains('selected')) {
      selectedArray.remove();
    }
  }
}

deleteSelectedButton.addEventListener('click', deleteSelected);

let selected = document.querySelector('.selected');
let previousTask;
let nextTask;

// Move Up tasks
function moveUpTasks() {
  selected = document.querySelector('.selected');
  if (selected && selected !== ordenedList.firstChild) {
    previousTask = selected.previousElementSibling;
    nextTask = selected.nextElementSibling;
    ordenedList.insertBefore(previousTask, nextTask);
  }
}

up.addEventListener('click', moveUpTasks);

// Move Down tasks
function moveDownTasks() {
  selected = document.querySelector('.selected');
  if (selected && selected !== ordenedList.lastChild) {
    nextTask = selected.nextElementSibling;
    ordenedList.insertBefore(nextTask, selected);
  }
}

down.addEventListener('click', moveDownTasks);

function displayDate() {
  const today = new Date();
  const currentMonth = ["Janeiro", "Fevereiro", "Mar??o", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  const weekDays = ['Domingo', 'Segunda', 'Ter??a', 'Quarta', 'Quinta', 'Sexta', 'S??bado'];
  const day = today.getDay();
  const month = currentMonth[(today.getMonth())];
  const todayDay = weekDays[(today.getDay())];
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const todayDate = `${todayDay}, ${day} de ${month}`;
  document.getElementById("current-date").innerHTML = todayDate;
}

function displayHour() {
  const today = new Date();
  const hour = today.getHours();
  let minutes = today.getMinutes();
  if (today.getMinutes() < 10) {minutes = `0${today.getMinutes()}`;}
  const currentHour = `${hour}:${minutes}`;
  document.getElementById("current-hour").innerHTML = currentHour;
}

displayHour();
setInterval(displayHour, 60000);

displayDate();
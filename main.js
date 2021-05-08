const btn = document.querySelector('button[name="btn-add"]');
let trashList = document.querySelectorAll('span.fa-trash');
const input = document.querySelector('input[name="todo"]');
const ul = document.querySelector('.todo-list');
const liItems = document.querySelectorAll('.todo-list > li');
const wrapper = document.querySelector('.wrapper');
let arrItems = [];

// Add item
const showList = () => {
    const li = document.createElement('li');
    const actions = document.createElement('div');
    actions.classList.add('actions');

    const completed = document.createElement('span');
    completed.classList.add('fas', 'fa-check');
    actions.appendChild(completed);

    const trash = document.createElement('span');
    trash.classList.add('fas', 'fa-trash');
    actions.appendChild(trash);

    li.textContent = input.value;
    li.appendChild(actions);
    ul.appendChild(li);

  console.dir(arrItems);
}

const addItemToList = () => {
  const item = {
      value: input.value,
  };
  arrItems.push(item);
  showList();
}

const filterInput = () => {

  if (input.value === "") {
      console.log("Pusto tu");
      return false;
  }

  addItemToList();
}

const addItem = (e) => {
  e.preventDefault();
  filterInput();
}

btn.addEventListener('click', addItem);

// Remove form list


// Done

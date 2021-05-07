const btn = document.querySelector('button[name="btn-add"]');
let trashList = document.querySelectorAll('span.fa-trash');
const input = document.querySelector('input[name="todo"]');
const ul = document.querySelector('.todo-list');
const liItems = document.querySelectorAll('.todo-list > li');
let arrItems = [];

const addItemToList = () => {
  const item = {
      value: input.value,
  };
  arrItems.push(item);
  trashList = document.querySelectorAll("span.fa-trash");

  const li = document.createElement('li');
  const trash = document.createElement('span');
  trash.classList.add('fas', 'fa-trash');
  li.textContent = input.value;
  li.appendChild(trash);
  ul.appendChild(li);

  console.log(arrItems);

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

const deleteElement = () => {

}





btn.addEventListener('click', addItem);

console.log(trashList);


trashList.forEach(el => {
  el.addEventListener("click", function (e) {
    // const item = e.target;
      console.dir(e.target);
  });
})
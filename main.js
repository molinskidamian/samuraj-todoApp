const doneTask = (e) => {
  const elementDone = e.target.parentNode.parentNode;
  console.log(elementDone);

  elementDone.classList.toggle('finished');
}

const removeTask = (e) => {
  const elemenToRemove = e.target.parentNode.parentNode;
  elemenToRemove.remove();
}

document.querySelectorAll(".fa-trash").forEach((item) => {
    item.addEventListener("click", removeTask);
});

document.querySelectorAll('.fa-check').forEach(item => {
  item.addEventListener('click', doneTask);
})
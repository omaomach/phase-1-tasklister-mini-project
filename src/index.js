document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createToDo(e.target.to_do.value);
    form.reset();
  })
  
});

function createToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  li.textContent = todo;
  btn.textContent = 'x';
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);

}

function handleDelete(e) {
  console.log(e.target.parentNode.remove());
}
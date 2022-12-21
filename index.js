const inputEl = document.querySelector('input')
const submitEl = document.querySelector('#submit')
const itemsEl = document.querySelector('ul')
const deleteEl = document.querySelector('#delete')

// addTask function 
function addTask(task) {
  // create DOM 
  const newEl = document.createElement('li')
  const span = document.createElement('span')
  const button = document.createElement('button')
  button.textContent = 'Delete'
  newEl.textContent = task
  newEl.append(span, button)
  itemsEl.appendChild(newEl)
  console.log(itemsEl)
}

submitEl.addEventListener('click', () => {
  addTask(inputEl.value)
  inputEl.value = ''
})

function deleteItem(itemEl) {
  itemEl.parentNode.removeChild(itemEl)
}


itemsEl.addEventListener('click',(event) => {
  if(event.target.tagName === 'BUTTON') {
    deleteItem(event.target.parentNode)
  }
})
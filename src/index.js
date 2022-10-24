document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  const lable= document.getElementById('new-task-description')
  const form = document.querySelector('#create-task-form')
   form.addEventListener('submit', submit) 
   lable.value=''
   function submit(e){
    e.preventDefault()
    const ul = document.getElementById('tasks')
    const li =document.createElement('li')
    li.textContent=lable.value
    ul.append(li)
    let btn = document.createElement('button')
    btn.textContent=' x'
    const select = document.createElement('select')
    const option = document.createElement('option')
    select.innerHTML = `<option>High</option>
    <option>Medium</option>
    <option>Low</option>` 
    select.style.backgroundColor = 'pink'
    select.append(option)            
    li.append(btn , select)
   btn.addEventListener('click' , e => {
    e.target.parentNode.remove()
    
   }) 
   }
  })
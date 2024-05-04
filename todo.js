let todoList = [
  {
    item:'Buy Milk',
     dueDate:'13/04/2024'
  },
  {
    item:'Go To Collage',
    dueDate:'14/04/2024'
  }
];
displayItems();
// taking text from inout field and inserting into list
function addTodo(){
  let inputElement = document.querySelector('.todo-input');

  let dateElement = document.querySelector('#todo-date');
  
  // we want value inside the inout we use value keyword
  let todoItem = inputElement.value;
  // we take value of date from input
  let todoDate = dateElement.value;
  // we use puch to add element and date as an obejct at the end of array
  todoList.push({item:todoItem,dueDate:todoDate});

  // after inserting value in list then we need to leave empty input box....so we assing empty string in inputElement
  inputElement.value = '';
  dateElement.value='';

  displayItems();
}


// take all element from list and show on paragraph....
function displayItems(){
let ContainerElement = document.querySelector('.todo-container');
let newHtml = '';

for(let i = 0 ; i < todoList.length;i++){
  // let item = todoList[i].item;
  // let dueDate = todoList[i].dueDate;
  // instead of fecting data sepratly we use object destructing 
  let {item , dueDate } = todoList[i];
  newHtml += `
 
  <span>${item}</span>
  <span>${dueDate}</span>
  <button class="btn-delete" onclick = "todoList.splice(${i},1); displayItems();">Delete</button>
 
  `;// splice method is used to add or remove element in array it take two arguments first will tell in which index you want to delete and second tell how many you want to delete element ..
}
ContainerElement.innerHTML = newHtml;
}
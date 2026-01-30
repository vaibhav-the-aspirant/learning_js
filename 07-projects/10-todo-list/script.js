const todo = document.querySelector('#todo')
const addButton = document.querySelector('.add')
const errorMessage = document.querySelector('#errorMsg')
const list = document.querySelector('#todo-list')
let inputValue ;
addButton.disabled = true;

let TodoValid ;
//taking todo as input
todo.addEventListener('input',(e)=>{
    inputValue = e.target.value;
     const value = inputValue;
    // console.log(value)
    if(value === ''){
        TodoValid = false
    }
    else if(ifOnlySpaces(value)){
        TodoValid = false
    } //check whether the input todo has only spaces

    else if((value.trim()).length < 3){
        TodoValid = false
    }
    else TodoValid = true
    // console.log(TodoValid);
    
    if(TodoValid){
        addButton.disabled = false;
        errorMessage.innerHTML = ''
    }
    else {
        addButton.disabled = true;
        errorMessage.innerHTML = 'Invalid input.'
    }
})


const todos = []
//adding todo to input
addButton.addEventListener('click',(e)=>{
    e.preventDefault()
    todos.push(inputValue);
    console.log(todos)
    todo.value = ''
    addButton.disabled = true;

    renderTodos()
})

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteButton')) {
        const index = e.target.dataset.index;
        todos.splice(index, 1);
        renderTodos();
        addButton.disabled = true;
    }
});












//check spaces
function ifOnlySpaces(str){
    for (const char of str) {
        if(char !== ' ')
            return false;
    }
    return true;
}


//render todo list 
function renderTodos(array){
    
    list.innerHTML = ''
    todos.forEach((item,index) => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `${item}.<span><button class="deleteButton" data-index="${index}">❌</button></span>`;
        listItem.classList.add('todo-items')
        list.appendChild(listItem)
    });




    // const text = array[length-1] 
    // const listItem = document.createElement('li')
    // // console.log(`${text}.<span><button>❌</button></span>`)
    // listItem.innerHTML = `${text}.<span><button class="deleteButton">❌</button></span>`;
    // listItem.classList.add('todo-items')
    // list.appendChild(listItem)
}



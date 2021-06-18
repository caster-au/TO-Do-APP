const todoInput= document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const displayButton =document.querySelector(".display-button");
const deleteButton=document.querySelector(".bp");

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTodo);
document.addEventListener("DOMContentLoaded",displayTodos);
deleteButton.addEventListener("click",deleteall);

function addTodo(e){
    e.preventDefault();
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    saveLocalTodos(todoInput.value);
    todoInput.value=" ";
//check button
    const completedButton =document.createElement("button");
    completedButton.innerHTML=`<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
//trash button
    const trashButton =document.createElement("button");
    trashButton.innerHTML=`<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
//attach final todo
    todoList.appendChild(todoDiv);
}
function deleteTodo(e){
    const item = e.target;
    if(item.classList[0]==="trash-btn"){
        //e.target.parentElement.remove();
        const todo=item.parentElement;
        todo.classList.add("fall");
        //removeLocalTodos(todo);
        todo.addEventListener("transitionend",e => {
            todo.remove();
        });
    }
        if(item.classList[0]==="complete-btn"){
            const todo=item.parentElement;
            todo.classList.toggle("completed");
            console.log(todo);
        }
}
function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log(localStorage);
}
function displayTodos(){
    let todos;
    if(localStorage.getItem("todos")===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo= document.createElement("li");
        newTodo.innerText=todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todoInput.value="";
        const completedButton=document.createElement("button");
        completedButton.innerHTML=`<i class="fas fa-check"></i>`;
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton=document.createElement("button");
        trashButton.innerHTML=`<i class="fas fa-trash"></i>`;
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);
    });
}
function deleteall(e){
    const item=e.target;
    if(item.classList[0]==="bp"){
    alert("Everything will be deleted now!!");
    localStorage.clear();
    }

}
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
const toDos = [];

const saveToDos =()=>{
    localStorage.setItem("todos",JSON.stringify(toDos));
}

const deleteToDo=(event)=>{
    const li = event.target.parentElement;
    li.remove();
}

const paintToDo=(newTodo)=>{
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

const handleToDoSubmit = (event)=>{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
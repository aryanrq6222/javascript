const addBtn = document.querySelector(".add");
const inputText = document.getElementById('todoinput')
const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
    text = inputText.value;

    const todoDiv = document.createElement('div')

    todoDiv.classList.add('todo')

    const para = document.createElement('p')
    para.innerHTML = text;

    const buttonDiv = document.createElement('div')

    const tickBtn = document.createElement('button')
    tickBtn.innerHTML = "✅";
    tickBtn.addEventListener("click", () => {
        para.style.textDecoration = "line-through";
    });

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = "🗑";
    deleteBtn.addEventListener("click", () => {
        todoDiv.remove();
    });

    todoDiv.appendChild(para);
    buttonDiv.appendChild(tickBtn);
    buttonDiv.appendChild(deleteBtn);
    todoDiv.appendChild(buttonDiv);

    todoList.appendChild(todoDiv);

    inputText.value = "";
}
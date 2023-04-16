// Variáveis
const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todo__list")

// Funções
const saveTodo = (text) => {
    const todo = document.createElement("li");
    todo.classList.add("todo__item");

    const todoCheckbox = document.createElement("input");
    todoCheckbox.setAttribute("type", "checkbox");
    todoCheckbox.setAttribute("id", "todo-item5");
    todo.appendChild(todoCheckbox);

    const todoLabel = document.createElement("label");
    todoLabel.htmlFor = "todo-item5";
    todo.appendChild(todoLabel);
    todoLabel.innerText = text;

    const todoIcon = document.createElement("i");
    todoIcon.innerHTML = '<img src="./assets/img/icon-cross.svg" alt="Icone em formato de X">';
    todo.appendChild(todoIcon);

    const todoFooter = document.querySelector(".todo__item-footer");
    todoList.insertBefore(todo, todoFooter);

    console.log(todo);
}

// Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);
    }

});
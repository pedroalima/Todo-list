// Variáveis
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todo__list");

// Funções
const createTodo = (text) => {
    const todo = document.createElement("li");
    todo.classList.add("todo__item");

    const todoCheckbox = document.createElement("input");
    todoCheckbox.setAttribute("type", "checkbox");
    todo.appendChild(todoCheckbox);

    const todoLabel = document.createElement("label");
    todo.appendChild(todoLabel);
    todoLabel.innerText = text;

    const todoIcon = document.createElement("i");
    todoIcon.innerHTML = '<img src="./assets/img/icon-cross.svg" class="remove" alt="Icone em formato de X">';
    todo.appendChild(todoIcon);

    const todoFooter = document.querySelector(".todo__item-footer");
    todoList.insertBefore(todo, todoFooter);

    todoInput.value = "";
}

const clearCompleted = () => {
    const todoItens = todoList.querySelectorAll(".todo__item");

    todoItens.forEach(item => {
        if (item.classList.contains("todo__item") && item.children[0].checked) {
            item.remove();
        }
    });
}

// Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue) {
        createTodo(inputValue);
    }

});

document.addEventListener('click', (e) => {
    const targetElement = e.target;
    const parentElement = targetElement.closest("li");

    if (targetElement.classList.contains("remove")) {
        parentElement.remove();
    } 

    if (targetElement.id === "clearCompleted") {
        clearCompleted();
    }

});
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
    todoCheckbox.setAttribute("id", "checkbox");
    todo.appendChild(todoCheckbox);

    const todoLabel = document.createElement("label");
    todo.appendChild(todoLabel);
    todoLabel.innerText = text;

    const todoIcon = document.createElement("i");
    todoIcon.innerHTML = '<img src="./assets/img/icon-cross.svg" id="remove" alt="Icone em formato de X">';
    todo.appendChild(todoIcon);

    const todoFooter = document.querySelector(".todo__item-footer");
    todoList.insertBefore(todo, todoFooter);

    todoInput.value = "";
}

const itemsLeft = () => {
    const todoItens = todoList.querySelectorAll(".todo__item");
    const paragraph = document.querySelector("#items-left");
    let todoLength = todoItens.length;
    
    paragraph.innerHTML = `${todoLength} items left`;
}

const clearCompleted = () => {
    const todoItens = todoList.querySelectorAll(".todo__item");

    todoItens.forEach(item => {
        if (item.classList.contains("todo__item") && item.children[0].checked) {
            item.remove();
        }
    });
}

const showAll = () => {
    const todoItens = todoList.querySelectorAll(".todo__item");

    todoItens.forEach(item => {
        if (item.classList.contains("todo__item")) {
            item.classList.remove("hide");
        }
    });
}

const showActive = () => {
    const todoItens = todoList.querySelectorAll(".todo__item");

    todoItens.forEach(item => {
        if (item.classList.contains("todo__item") && item.children[0].checked) {
            item.classList.toggle("hide");
        }
    });
}

const showCompleted = () => {
    const todoItens = todoList.querySelectorAll(".todo__item");

    todoItens.forEach(item => {
        if (item.classList.contains("todo__item") && !item.children[0].checked) {
            item.classList.add("hide");
        }
    });
}

// Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;

    if (inputValue) {
        createTodo(inputValue);
    };

    itemsLeft();
});

document.addEventListener('click', (e) => {
    const targetElement = e.target;
    const parentElement = targetElement.closest("li");

    if (targetElement.id === "remove") {
        parentElement.remove();
    };

    if (targetElement.id === "clearCompleted") {
        clearCompleted();
    };

    if (targetElement.id === "all") {
        showAll();
    };

    if (targetElement.id === "active") {
        showActive();
    };

    if (targetElement.id === "completed") {
        showCompleted();
    };
});
// Variáveis
const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector('#todoInput');

// Funções
const saveTodo = (text) => {
    const todo = document.createElement("li");
    todo.classList.add("todo__item");

    const todoCheckbox = document.createElement("input");
    todo.appendChild(todoCheckbox);

    const todoLabel = document.createElement("label");
    todo.appendChild(todoLabel);
    todoLabel.innerText = text;

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
import "./style.css";

const todoForm = document.querySelector<HTMLFormElement>("form");
const divTodoList = document.querySelector<HTMLDivElement>("#todoList");
const inputTodo = document.querySelector<HTMLInputElement>('[name="todo"]');

let todoList = [];

if (todoForm != null && divTodoList != null) {
  todoForm.onsubmit = (event) => {
    event.preventDefault();
    const value = inputTodo?.value;
    let todoCheckbox = document.createElement("input");
    todoCheckbox.setAttribute("type", "checkbox");
    const todo = document.createElement("li");
    todo.textContent = value || "vacio";
    todoList.push(value);
    todo.appendChild(todoCheckbox);
    divTodoList.appendChild(todo);
  };
}

//element.addEventListener("click", () => setCounter(counter + 1));
//setCounter(0);
// hola

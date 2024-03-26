import "./style.css";

const todoForm = document.querySelector<HTMLFormElement>("form");
const divTodoList = document.querySelector<HTMLDivElement>("#todoList");
const inputTodo = document.querySelector<HTMLInputElement>('[name="todo"]');
const clearChecked = document.querySelector<HTMLButtonElement>('[name="clearChecked"]');

type TodoItem = {
  what: string;
  done: boolean;
};

let todoList: TodoItem[] = [];

function createTodoItem(task: string): TodoItem {
  const objectTodoItem: TodoItem = {
    what: task,
    done: false,
  };
  return objectTodoItem;
}

function render(list: TodoItem[]): void {
  if (divTodoList != null) {
    divTodoList.innerHTML = "";
  }
  list.forEach(function (todoItem, index) {
    let todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    if (todoItem.done == true) {
      todoCheckbox.checked = true;
    }
    const todo = document.createTextNode(todoItem.what);
    const div = document.createElement("div");
    const buttonClear = document.createElement("button");
    buttonClear.textContent = "Clear";
    div.append(todoCheckbox, todo, buttonClear);
    divTodoList?.appendChild(div);

    todoCheckbox.addEventListener("click", () => (todoItem.done = todoItem.done ? false : true));
    buttonClear.addEventListener("click", () => {
      todoList.splice(index, 1);
      render(todoList);
    });
  });
}

if (todoForm != null && divTodoList != null && inputTodo != null && clearChecked != null) {
  todoForm.onsubmit = (event) => {
    event.preventDefault();
    const value = inputTodo?.value || "vacio";
    todoList.push(createTodoItem(value));
    inputTodo.value = "";

    render(todoList);
  };
  clearChecked.addEventListener("click", () => {
    const newTodoList = todoList.filter((item) => item.done == false);
    todoList = newTodoList;
    render(todoList);
  });
}

//element.addEventListener("click", () => setCounter(counter + 1));
//setCounter(0);
// hola

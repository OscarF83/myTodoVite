import "./style.css";
import { elements } from "./functions/getElement";

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
  elements.divTodoList.innerHTML = "";

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
    elements.divTodoList.appendChild(div);

    todoCheckbox.addEventListener("click", () => (todoItem.done = todoItem.done ? false : true));
    buttonClear.addEventListener("click", () => {
      todoList.splice(index, 1);
      div.remove(); //Mejor que volver hacer un render, más eficiente
      //render(todoList);
    });
  });
}

elements.todoForm.onsubmit = (event) => {
  event.preventDefault();
  const value = elements.inputTodo.value;
  todoList.push(createTodoItem(value));
  elements.inputTodo.value = "";

  render(todoList);
};
elements.clearChecked.addEventListener("click", () => {
  const newTodoList = todoList.filter((item) => item.done == false);
  todoList = newTodoList;
  render(todoList);
});

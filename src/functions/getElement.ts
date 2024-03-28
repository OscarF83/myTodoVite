export function getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (element === null) {
    throw new Error(`Element not found: ${selector}`);
  }
  return element;
}

export const elements = {
  inputTodo: getElement<HTMLInputElement>('[name="todo"]'),
  clearChecked: getElement<HTMLButtonElement>('[name="clearChecked"]'),
  todoForm: getElement<HTMLFormElement>("form"),
  divTodoList: getElement<HTMLDivElement>("#todoList"),
};

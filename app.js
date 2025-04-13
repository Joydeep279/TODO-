import render from "./render.js";
import { addTodo, removeItem, toggleTick } from "./store.js";
window.dispatchEvent(new Event("todoChange"));
window.addEventListener("todoChange", () => {
  render();
});
render();
const form = document.querySelector("form");
const input = document.querySelector("#todo-title-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo = {
    id: `${crypto.randomUUID()}`,
    titles: input.value,
    complete: false,
  };
  addTodo(newTodo);
  input.value = "";
  render();
});
const parentContainer = document.querySelector(".todos");
parentContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-todo-button")) {
    const li = e.target.closest(".todo");
    removeItem(li.dataset.id);
  }
});
parentContainer.addEventListener("change", (e) => {
  const id = e.target.closest(".todo").dataset.id;
  toggleTick(id, e.target.checked);
});

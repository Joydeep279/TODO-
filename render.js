import store from "./store.js";
function render() {
  const todos = window.document.querySelector(".todos");
  const TodoList = store.TODO.map((todo) => {
    return `<li class="todo" data-id=${todo.id}>
<span class="todo-title ${todo.complete ? "completed" : ""}"> ${
      todo.titles
    } </span>
<div class="toggle-delete">
  <input type="checkbox" name="completed" class="todo-checkbox" ${
    todo.complete ? "checked" : ""
  } />
  <button class="delete-todo-button">x</button>
</div>
</li>`;
}).join("");

  todos.innerHTML = TodoList;
}
export default render;

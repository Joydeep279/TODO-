import render from "./render.js";

const store = {
  TODO: [],
};
const storeHandler = {
  get(targer, property) {
    return targer[property];
  },
  set(target, property, value) {
    target[property] = value;
    if (property == "TODO") {
      window.dispatchEvent(new Event("todoChange"));
    }
    localStorage("store", JSON.stringify(store));
  },
};

const storeProxy = new Proxy(store, storeHandler);
function addTodo(newTodo) {
  if (newTodo.titles.length) {
    store.TODO = [newTodo, ...store.TODO];
   
  }
}
export function removeItem(id) {
  store.TODO = store.TODO.filter((item) => item.id != id);
  render();
}
export function toggleTick(id, isTrue) {
  store.TODO = store.TODO.map((item) => {
    if (item.id == id) {
      return { ...item, complete: isTrue };
    } else {
      return item;
    }
  });
  render();
}
export { addTodo };
export default storeProxy;

export default class Todo {
  constructor(storage) {
    this.storage = storage;
    this.todoForm = document.querySelector('#todo-form');
    this.todoInput = this.todoForm.querySelector('input');
    this.todoList = document.querySelector('#todo-list');
  }
  getCreateLi(item) {
    const li = document.createElement('li');
    const text = document.createElement('span');
    const remove = document.createElement('button');
    text.innerText = item.text;
    remove.innerText = `❌`;
    remove.dataset.id = item.id;
    remove.dataset.type = 'remove';
    li.appendChild(text);
    li.appendChild(remove);
    return li;
  }
  setList() {
    const items = this.storage.getTodo();
    this.todoList.innerHTML = ``;
    if (items) {
      for (const item of items) {
        const li = this.getCreateLi(item);
        this.todoList.appendChild(li);
      }
    }
  }
  init() {
    const onSubmitTodo = event => {
      event.preventDefault();
      const item = {
        id: Date.now(),
        text: this.todoInput.value,
      };
      this.todoInput.value = '';
      this.storage.setTodo(item);
      const li = this.getCreateLi(item);
      this.todoList.prepend(li);
    };
    const onRemove = event => {
      const {
        dataset: { type, id },
        parentElement,
      } = event.target;
      if (type === 'remove') {
        this.storage.removeTodo(Number(id));
        parentElement.remove();
      }
    };
    this.todoForm.addEventListener('submit', onSubmitTodo);
    this.todoList.addEventListener('click', onRemove);
    this.setList();
  }
}

const USERNAME = 'username';
const TODO = 'todo';

export default class Storage {
  constructor() {
    this.storage = localStorage;
  }
  setUser(username) {
    this.storage.setItem(USERNAME, username);
  }
  getUser() {
    return this.storage.getItem(USERNAME);
  }
  getTodo() {
    return JSON.parse(this.storage.getItem(TODO)) || [];
  }
  setTodo(item) {
    const todo = [item, ...this.getTodo()];
    this.storage.setItem(TODO, JSON.stringify(todo));
  }
  removeTodo(id) {
    const todo = this.getTodo().filter(item => item.id !== id);
    this.storage.setItem(TODO, JSON.stringify(todo));
  }
}

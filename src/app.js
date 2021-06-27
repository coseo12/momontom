import Storage from './js/storage.js';
import Login from './js/login.js';
import Clock from './js/clock.js';
import Quotes from './js/quotes.js';
import Background from './js/background.js';
import Todo from './js/todo.js';

class App {
  constructor(Storage, Login, Clock, Quotes, Background, Todo) {
    this.storage = new Storage();
    this.login = new Login(this.storage);
    this.todo = new Todo(this.storage);
    this.clock = new Clock();
    this.quotes = new Quotes();
    this.background = new Background();
  }

  init() {
    this.login.init();
    this.todo.init();
    this.clock.init();
    this.quotes.init();
    this.background.init();

    window.addEventListener('beforeunload', () => {
      this.clock.clear();
    });
  }
}

const app = new App(Storage, Login, Clock, Quotes, Background, Todo);

app.init();

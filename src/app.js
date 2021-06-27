import Storage from './js/storage.js';
import Login from './js/login.js';
import Clock from './js/clock.js';
import Quotes from './js/quotes.js';
import Background from './js/background.js';
import Todo from './js/todo.js';
import Weather from './js/weather.js';

class App {
  constructor(Storage, Login, Clock, Quotes, Background, Todo, Weather) {
    this.storage = new Storage();
    this.login = new Login(this.storage);
    this.todo = new Todo(this.storage);
    this.clock = new Clock();
    this.quotes = new Quotes();
    this.background = new Background();
    this.weather = new Weather();
  }

  init() {
    this.login.init();
    this.todo.init();
    this.clock.init();
    this.quotes.init();
    this.background.init();
    this.weather.init();

    window.addEventListener('beforeunload', () => {
      this.clock.clear();
    });
  }
}

const app = new App(Storage, Login, Clock, Quotes, Background, Todo, Weather);

app.init();

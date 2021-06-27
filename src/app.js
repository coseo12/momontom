import Storage from './js/storage.js';
import Login from './js/login.js';
import Clock from './js/clock.js';
import Quotes from './js/quotes.js';
import Background from './js/background.js';

class App {
  constructor(Storage, Login, Clock, Quotes, Background) {
    this.storage = new Storage();
    this.login = new Login(this.storage);
    this.clock = new Clock();
    this.quotes = new Quotes();
    this.background = new Background();
  }

  init() {
    if (this.storage.getUser()) {
      this.login.hidden();
    }
    this.clock.init();
    this.quotes.init();
    this.background.init();

    window.addEventListener('beforeunload', () => {
      this.clock.clear();
    });
  }
}

const app = new App(Storage, Login, Clock, Quotes, Background);

app.init();

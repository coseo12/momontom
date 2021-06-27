import Storage from './js/storage.js';
import Login from './js/login.js';
import Clock from './js/clock.js';

class App {
  constructor(Storage, Login, Clock) {
    this.storage = new Storage();
    this.login = new Login(this.storage);
    this.clock = new Clock();
  }

  init() {
    if (this.storage.getUser()) {
      this.login.hidden();
    }
    this.clock.init();

    window.addEventListener('beforeunload', () => {
      this.clock.clear();
    });
  }
}

const app = new App(Storage, Login, Clock);

app.init();

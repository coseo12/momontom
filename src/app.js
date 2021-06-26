import Storage from './js/storage.js';
import Login from './js/login.js';

class App {
  constructor(Storage, Login) {
    this.storage = new Storage();
    this.login = new Login(this.storage);
  }
  init() {
    if (this.storage.getUser()) {
      this.login.hidden();
    }
  }
}

const app = new App(Storage, Login);

app.init();

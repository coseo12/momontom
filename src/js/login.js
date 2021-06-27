const HIDDEN_CLASS_NAME = 'hidden';

export default class Login {
  constructor(storage) {
    this.storage = storage;
    this.loginForm = document.querySelector('#login-form');
    this.loginInput = this.loginForm.querySelector('input');
    this.greeting = document.querySelector('#greeting');
  }
  show() {
    this.loginForm.classList.remove(HIDDEN_CLASS_NAME);
    this.greeting.classList.add(HIDDEN_CLASS_NAME);
    this.greeting.innerText = '';
  }
  hidden() {
    this.loginForm.classList.add(HIDDEN_CLASS_NAME);
    this.greeting.classList.remove(HIDDEN_CLASS_NAME);
    this.greeting.innerText = `Hello ${this.storage.getUser()}`;
  }
  init() {
    if (this.storage.getUser()) {
      this.hidden();
    }
    const onLoginSubmit = event => {
      event.preventDefault();
      this.storage.setUser(this.loginInput.value);
      this.hidden();
    };
    this.loginForm.addEventListener('submit', onLoginSubmit);
  }
}

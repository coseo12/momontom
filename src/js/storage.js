const USERNAME = 'username';

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
}

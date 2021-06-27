const SEC = 1000;
export default class Clock {
  constructor() {
    this.clock = document.querySelector('#clock');
    this.interval = null;
  }
  setClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds().toString().padStart(2, `0`);
    this.clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
  init() {
    this.setClock();
    this.interval = setInterval(() => {
      this.setClock();
    }, SEC);
  }
  clear() {
    clearInterval(this.interval);
  }
}

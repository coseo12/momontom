export default class Background {
  constructor() {
    this.body = document.querySelector('body');
    this.bgImg = document.createElement('img');
    this.body.appendChild(this.bgImg);
  }
  setBackground() {
    const img = Math.floor(Math.random() * 7);
    this.bgImg.src = `src/img/${img}.jpg`;
  }
  init() {
    this.setBackground();
  }
}

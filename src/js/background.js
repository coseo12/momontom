export default {
  setBackground() {
    const body = document.querySelector("body");
    const img = Math.floor(Math.random() * 7);
    body.style.backgroundImage = `url('src/img/${img}.jpg')`;
  },
  init() {
    this.setBackground();
  },
};

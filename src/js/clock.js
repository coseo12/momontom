export default {
  div: document.querySelector(".clock-box"),
  getTime() {
    const date = new Date();
    const hour =
      date.getHours().toString().length === 1
        ? `0${date.getHours()}`
        : date.getHours();
    const minutes =
      date.getMinutes().toString().length === 1
        ? `0${date.getMinutes()}`
        : date.getMinutes();
    const seconds =
      date.getSeconds().toString().length === 1
        ? `0${date.getSeconds()}`
        : date.getSeconds();
    return `${hour}:${minutes}:${seconds}`;
  },
  setClock() {
    this.div.innerText = this.getTime();
    setInterval(() => {
      this.div.innerText = this.getTime();
    }, 1000);
  },
  init() {
    this.setClock();
  },
};

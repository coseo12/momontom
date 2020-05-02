export default {
  input: document.querySelector("#name"),
  name: document.querySelector(".name"),
  todoBox: document.querySelector(".todo-box"),
  setUser() {
    if (localStorage.getItem("user") === null) {
      this.name.style.display = "none";
    } else {
      this.name.innerText = `Hello ${localStorage.getItem("user")}`;
      this.input.style.display = "none";
      this.name.style.display = "block";
      this.todoBox.style.display = "flex";
    }
  },
  setAddEventHandler() {
    this.input.addEventListener("keypress", (e) => {
      if (e.keyCode === 13 && this.input.value !== "") {
        localStorage.setItem("user", this.input.value);
        this.setUser();
      }
    });
  },
  init() {
    this.setUser();
    this.setAddEventHandler();
  },
};

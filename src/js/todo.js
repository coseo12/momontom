export default {
  addTask() {
    const add = document.querySelector("#add");
    add.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        const item = {
          id: new Date().getTime(),
          text: add.value,
        };
        add.value = "";
        this.setItem("PENDING", item);
        this.createdList();
      }
    });
  },
  deletedItem(type, id) {
    const items = JSON.parse(localStorage.getItem(type));
    localStorage.setItem(
      type,
      JSON.stringify(
        items.reduce((acc, cur) => {
          const obj = { ...cur };
          if (obj.id !== id) acc.push(obj);
          return acc;
        }, [])
      )
    );
  },
  setItem(type, item) {
    const items =
      JSON.parse(localStorage.getItem(type)) === null
        ? []
        : JSON.parse(localStorage.getItem(type));
    items.push(item);
    localStorage.setItem(type, JSON.stringify(items));
  },
  createdLI(type, item) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("button");

    li.setAttribute("class", "list");
    span.innerText = item.text;
    deleteBtn.innerHTML = "&#10060";
    deleteBtn.addEventListener("click", () => {
      this.deletedItem(type, item.id);
      this.createdList();
    });
    checkBtn.innerHTML = type === "PENDING" ? "&#9989;" : "&#9194;";
    checkBtn.addEventListener("click", () => {
      this.deletedItem(type, item.id);
      this.setItem(type === "PENDING" ? "FINISHED" : "PENDING", item);
      this.createdList();
    });

    li.append(span);
    li.append(deleteBtn);
    li.append(checkBtn);
    return li;
  },
  deletedList() {
    const list = document.querySelectorAll(".list");
    for (const el of list) {
      el.remove();
    }
  },
  createdList() {
    const pending = document.querySelector(".pending");
    const finished = document.querySelector(".finished");
    const pendingItems =
      JSON.parse(localStorage.getItem("PENDING")) === null
        ? []
        : JSON.parse(localStorage.getItem("PENDING"));
    const finishedItems =
      JSON.parse(localStorage.getItem("FINISHED")) === null
        ? []
        : JSON.parse(localStorage.getItem("FINISHED"));

    this.deletedList();

    pendingItems.map((item) => {
      pending.append(this.createdLI("PENDING", item));
      return null;
    });
    finishedItems.map((item) => {
      finished.append(this.createdLI("FINISHED", item));
      return null;
    });
  },
  init() {
    this.addTask();
    this.createdList();
  },
};

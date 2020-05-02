import background from "./js/background.js";
import clock from "./js/clock.js";
import todo from "./js/todo.js";
import userAdd from "./js/userAdd.js";
import weather from "./js/weather.js";

function init() {
  background.init();
  clock.init();
  userAdd.init();
  todo.init();
  weather.init();
}
init();

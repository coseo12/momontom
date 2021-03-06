const COORDS = 'COORDS';

export default class Weather {
  constructor() {
    this.coords = '';
    this.apiKey = '5ca0d43aa0aa947114aa0730b3b46959';
    this.weather = document.querySelector('#weather');
  }
  handelGeoError() {
    console.log('Can access geo location!');
  }
  async askForCoords() {
    await navigator.geolocation.getCurrentPosition(position => {
      const items = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      localStorage.setItem(COORDS, JSON.stringify(items));
      this.setCoords();
      this.getWeader(this.coords.latitude, this.coords.longitude);
    }, this.handelGeoError);
  }
  getWeader(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const temperature = json.main.temp;
        const place = json.name;
        const weather = json.weather[0].main;
        this.weather.innerText = `${temperature}℃ / ${weather} @ ${place}`;
      })
      .catch(error => console.log(erros));
  }
  setCoords() {
    this.coords = JSON.parse(localStorage.getItem(COORDS));
  }
  setWeader() {
    this.setCoords();
    if (this.coords === null) {
      this.askForCoords();
    } else {
      this.getWeader(this.coords.latitude, this.coords.longitude);
    }
  }
  init() {
    this.setWeader();
  }
}

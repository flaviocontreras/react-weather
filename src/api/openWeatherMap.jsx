import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=67d25e24964248edc42eb6790589406c&units=metric';

//var openWeatherMap =

export default {
  getTemp(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(
      (res) => {
        if(res.data.cod && res.data.message){
            throw new Error(res.data.message);
        } {
          return res.data.main.temp;
        }
      }, (res) =>{
        throw new Error(res.data.message);
      });
  }
};;

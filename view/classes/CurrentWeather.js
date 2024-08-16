import { Translate } from './Translate.js'
export class CurrentWeather {

    constructor() {
        this.getLocationEvent()

    }

    async currentWeather(lat, lon, loc) {

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fa&appid=3d9e478c482d23fb555e5fe07bdf83d9`);
        
        const locationNameEn = response.data.name;

        let location;
        (!loc) ? location = await Translate.getFaLocation(locationNameEn) : location = loc
        const weather = response.data

        this.currentWeatherEvent(location, weather)
    }


    getLocationEvent() {
        document.addEventListener('LocationEvent', (event) => {
            this.currentWeather(event.detail.lat, event.detail.lon, event.detail.loc)
        })
    }

    currentWeatherEvent(location, weather) {
        document.dispatchEvent(new CustomEvent('currentWeatherEvent', {
            detail: {
                location: location,
                temp: weather.main.temp,
                timeZone: weather.timezone,
                maxTemp: weather.main.temp_max,
                minTemp: weather.main.temp_min,
                desc: weather.weather[0].description,
                imgDesc: weather.weather[0].main,
                humidity: weather.main.humidity,
                pressure: weather.main.pressure,
                wind: weather.wind.speed,
                sunRise: weather.sys.sunrise,
                sunSet: weather.sys.sunset,
            }
        }))
    }

}

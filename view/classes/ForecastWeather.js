import { Translate } from './Translate.js'
export class ForecastWeather {
    constructor() {
        this.getLocationEvent()
    }
    async forecastWeather(lat, lon, loc) {

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fa&appid=3d9e478c482d23fb555e5fe07bdf83d9`);

        const locationNameEn = response.data.name;
        let location;
        (!loc) ? location = await Translate.getFaLocation(locationNameEn) : location = loc;

        this.forecastWeatherEvent(response.data.list, location)
    }

    getLocationEvent() {
        document.addEventListener('LocationEvent', (event) => {
            this.forecastWeather(event.detail.lat, event.detail.lon, event.detail.loc)
        })
    }

    forecastWeatherEvent(dataList, location) {
        document.dispatchEvent(new CustomEvent('forecastWeatherEvent', {
            detail: {
                location: location,
                dataList: dataList
            }
        }))
    }

}
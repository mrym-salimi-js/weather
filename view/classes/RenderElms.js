import { WeekDay } from './WeekDay.js'
import { Loader } from './Loader.js'
export class RenderElms {
    constructor() {
        this.location = document.getElementById('location');
        this.weatherDesc = document.getElementById('weather-desc');
        this.temp = document.getElementById('temp');
        this.maxTemp = document.getElementById('max-temp');
        this.minTemp = document.getElementById('min-temp');
        this.tempIcon = document.getElementById('temp-icon');
        this.sunRise = document.getElementById('sunrise');
        this.sunSet = document.getElementById('sunset');
        this.humidity = document.getElementById('humidity');
        this.pressure = document.getElementById('pressure');
        this.wind = document.getElementById('wind');
        this.LiTemplateElm = document.getElementById('template-li')
        this.LiParentstempaletElm = document.getElementById('template-li-parent')
        this.forecastParentElm = document.querySelector('.forecast-elm-parent')



        this.getCurrentWeatherEvent()
        this.getForecastWeatherEvent()

    }
    getForecastWeatherEvent() {
        document.addEventListener("forecastWeatherEvent", event => {
            this.ForecastWeatherElm(event.detail.dataList)
        })
    }
    getCurrentWeatherEvent() {
        document.addEventListener("currentWeatherEvent", event => {
            console.log(event)
            this.CurrentWeatherElm(event.detail)
        })

    }

    ForecastWeatherElm(dataList) {
        this.forecastParentElm.innerHTML = ''
        dataList.forEach(item => {

            const day = new Date(item.dt * 1000).getDay()
            const hours = new Date(item.dt * 1000).getHours()
            const temp = item.main.temp
            const imgDesc = item.weather[0].main


            const weekDays = WeekDay.weekDays()

            const choosDay = weekDays[day]

            const ulCheck = document.getElementById(`day-${day}`);

            if (ulCheck === null) {
                const forecastLiParentElm = document.importNode(this.LiParentstempaletElm.content, true)
                forecastLiParentElm.getElementById('week-day').innerText = choosDay
                forecastLiParentElm.querySelector('.week-box').id = `day-${day}-`
                forecastLiParentElm.querySelector('.forecast-ul').id = `day-${day}`
                this.forecastParentElm.append(forecastLiParentElm)
            }

            const forecastLiElm = document.importNode(this.LiTemplateElm.content, true)
            const forecastUl = document.getElementById(`day-${day}`);
            forecastLiElm.getElementById('forecast-time').innerText = `${hours}:00`
            forecastLiElm.getElementById('forecast-img').src = `/assets/img/${imgDesc}.gif`
            forecastLiElm.getElementById('forecast-temp').innerText = `${Math.round(temp)} °C`
            forecastUl.append(forecastLiElm)
        });

        Loader.hidLoader()

    }

    CurrentWeatherElm(data) {

        this.location.innerText = data.location
        this.weatherDesc.innerText = data.desc
        this.temp.innerText = `${Math.round(data.temp)} °C`
        this.maxTemp.innerText = `${data.maxTemp} °C`
        this.minTemp.innerText = `${data.minTemp} °C`
        this.tempIcon.src = `/assets/img/${data.imgDesc}.gif`
        this.sunRise.innerText = this.setTime(data.sunRise)
        this.sunSet.innerText = this.setTime(data.sunSet)
        this.humidity.innerText = `${data.humidity} %`
        this.wind.innerText = `${Math.round(data.wind)} m/s`
        this.pressure.innerText = `${data.pressure} hPa`
    }

    setTime(sunrise) {
        let date = new Date((sunrise) * 1000);

        const h = date.getHours();
        const m = date.getMinutes();

        if (m < 10)  m === '0' + m

        return `${h}:${m}`;

    }

}

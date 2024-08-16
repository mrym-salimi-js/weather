import {Location} from './classes/Location.js'
import {CurrentWeather} from './classes/CurrentWeather.js'
import {ForecastWeather} from './classes/ForecastWeather.js'
import {Translate} from './classes/Translate.js'
import {RenderElms} from './classes/RenderElms.js'
import {search} from './classes/search.js'
import {WeekDay} from './classes/WeekDay.js'
import {Loader} from './classes/Loader.js'
import {Time} from './classes/Time.js'

 export class View {
    constructor() {
        this.location = new Location()
        this.currentWeather = new CurrentWeather()
        this.forecastWeather = new ForecastWeather()
        this.translate = new Translate()
        this.Render = new RenderElms()
        this.search = new search()
        this.weekDay = new WeekDay()
        this.loader = new Loader()
        setInterval(View.getTime, 500)

    }
    static getTime() {
        this.time = new Time
    }
}

new View



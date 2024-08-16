import {Loader} from './Loader.js'
export class Location {
    constructor() {
        Loader.showLoder()
        this.ownLocation()
    }
    async ownLocation() {
        await navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
           
            const loc = ''
            if (this.getOtherLocationEvent() === undefined) this.LocationEvent(lat, lon, loc)
        })
    }
    async otherLocation(location) {

        const response = await axios.get(`https://api.jawg.io/places/v1/search?text=${location}&access-token=C52ErydS3rXyPMr0i9MhXf3RHyNUZYQv7zQGkHqF4JTRJN2USTlZGQHrUHQMp9bz`)
        const coordinates = response.data.features[0].geometry.coordinates
        const lon = coordinates[0]
        const lat = coordinates[1]
        this.LocationEvent(lat, lon, location)
    }


    getOtherLocationEvent() {
        document.addEventListener('OtherLocationEvent', (event) => {
            this.otherLocation(event.detail.locationName)
        })

    }
    LocationEvent(lat, lon, loc) {
        document.dispatchEvent(new CustomEvent('LocationEvent', {
            detail: {
                lat: lat,
                lon: lon,
                loc: loc
            }
        }))

    }
}
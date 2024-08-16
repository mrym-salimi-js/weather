import { Loader } from "./Loader.js"
export class search {
    constructor() {

        this.inputLocation = document.getElementById('input-location')
        this.addLocation = document.getElementById('add-location')
        this.searchLocation = document.getElementById('search-icon')
        this.body = document.querySelector('body')

        this.addLocationProcess()
        this.searchLocationProcess()
    
    }
    addLocationProcess() {
        this.addLocation.addEventListener('click', () => {
            this.addLocation.classList.add('hidden')
            this.inputLocation.classList.remove('hidden')
            this.inputLocation.focus()
            this.searchLocation.classList.remove('hidden')
        })
    }

    searchLocationProcess() {
        this.searchLocation.addEventListener('click', () => {
            Loader.showLoder()
           
            this.getLocation()
            this.addLocation.classList.remove('hidden')
            this.inputLocation.classList.add('hidden')
            this.searchLocation.classList.add('hidden')
        })
    }


    getLocation() {
        const locationName = this.inputLocation.value;
        if (!locationName) return
        this.OtherLocationEvent(locationName)
    }

    OtherLocationEvent(locationName) {
        document.dispatchEvent(new CustomEvent('OtherLocationEvent', {
            detail: {
                locationName: locationName
            }
        }))
    }

}
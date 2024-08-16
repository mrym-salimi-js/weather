export class Loader {
    
    static showLoder() {
        this.containerElm = document.getElementById('container')
        this.containerElm.classList.add('blur-md')
    }
    static hidLoader() {
        this.containerElm = document.getElementById('container')
        this.containerElm.classList.remove('blur-md')
    }
}
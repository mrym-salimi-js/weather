export class Time {

    constructor() {
        this.clock = document.getElementById('clock');
        this.today = new Date();

        this.h = this.today.getHours();
        this.m = this.today.getMinutes();

        this.showTime()
    }

    showTime() {
        if (this.m < 10) {
            this.m = '0' + this.m
        }

        this.clock.innerHTML = `${this.h}:${this.m}`;
    }
}

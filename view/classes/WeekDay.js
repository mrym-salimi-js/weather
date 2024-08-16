export class WeekDay {

    static weekDays() {
        this.day = document.getElementById('day');
        this.today = new Date();
        this.w = this.today.getDay()
        const weekDays = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه']
        this.day.innerHTML = weekDays[this.w]
        return weekDays
    }

}

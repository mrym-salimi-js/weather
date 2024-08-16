export class Translate {

    static async getFaLocation(locationNameEn) {
        const locationNameFa = await this.translateLocationName(locationNameEn)
        return locationNameFa
    }

    static async translateLocationName(locationNameEn) {
        const translateLocationName = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&ie=UTF-8&oe=UTF-8&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&sl=en&tl=fa&hl=hl&q=${locationNameEn}`)
        const locationNameFa = translateLocationName.data[0][0][0]
        return locationNameFa
    }

}
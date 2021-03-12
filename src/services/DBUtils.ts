import data from '../consts/data'
import {ICountry, Lang} from "../entities/interfaces";

export class DBUtils {

    static getCountryObjectByLang(id: number, lang: Lang): ICountry {
        const arr = data.filter(item => item.id === id);
        const obj = arr[0];
        const attractionNew = obj.attractionList.map((item) => {
            return {image: item.image, description: item.description[lang]}
        })

        const result: ICountry =  {
            id: obj.id,
            currId: obj.currId,
            country: obj.country[lang],
            capital: obj.capital[lang],
            description: obj.description[lang],
            image: obj.image,
            attractionList: attractionNew,
            videoId: 'SaTOst5utL8'
        }

        return result;
    }

    static getCountryListByLang(lang: Lang): ICountry[] {
        const arr = data;

        return arr.map((item) => {
            return this.getCountryObjectByLang(item.id, lang);
        })
    }
}

import data from '../consts/data'
import currencyList from "../consts/currencyList";

import {ICountry, Lang} from "../entities/interfaces";
import {
    NBRB_CURRENCY_EUR_ID,
    NBRB_CURRENCY_NAME_URL,
    NBRB_CURRENCY_RATE_URL,
    NBRB_CURRENCY_USD_ID
} from "../consts/currencyURL";

export class DBUtils {

    static getCountryObjectByLang(id: string, lang: Lang): ICountry {
        const arr = data.filter(item => item.id === id);
        const obj = arr[0];
        const attractionNew = obj.attractionList.map((item) => {
            return {image: item.image, description: item.description[lang]}
        })

        return {
            id: obj.id,
            currId: obj.currId,
            country: obj.country[lang],
            capital: obj.capital[lang],
            description: obj.description[lang],
            image: obj.image,
            attractionList: attractionNew,
            videoId: 'SaTOst5utL8'
        };
    }

    static getCountryListByLang(lang: Lang): ICountry[] {
        const arr = data;

        return arr.map((item) => {
            return this.getCountryObjectByLang(item.id, lang);
        })
    }

    static async getCurrencyNameByLang(id: string, lang: Lang) {
        // const res = await fetch(NBRB_CURRENCY_NAME_URL + id)
        // const data = await res.json();

        const arr = currencyList.filter(item => String(item.Cur_ID) === id);
        const data = arr[0];

        let name: string = '';

        if (lang === 'en') {
            name = data.Cur_Name_Eng;
        } else if (lang === 'be') {
            name = data.Cur_Name_Bel;
        } else if (lang === 'ru') {
            name = data.Cur_Name;
        }

        return {
            name: name,
            scale: String(data.Cur_Scale)
        };
    }

    static async getCurrencyRate(id: string) {
        const byn = await fetch(NBRB_CURRENCY_RATE_URL + id)
        const bynData = await byn.json();
        const bynDataRate = bynData.Cur_OfficialRate;

        const usd = await fetch(NBRB_CURRENCY_RATE_URL + NBRB_CURRENCY_USD_ID)
        const usdData = await usd.json();
        let usdDataRate = usdData.Cur_OfficialRate;

        const eur = await fetch(NBRB_CURRENCY_RATE_URL + NBRB_CURRENCY_EUR_ID)
        const eurData = await eur.json();
        let eurDataRate = eurData.Cur_OfficialRate;

        usdDataRate = bynDataRate / usdDataRate;
        eurDataRate = bynDataRate / eurDataRate;


        return {
            bynRate: String(Math.round((bynDataRate)*100)/100),
            usdRate: String(Math.round((usdDataRate)*100)/100),
            eurRate: String(Math.round((eurDataRate)*100)/100)
        }
    }

    static async getCurrencyObj(id: string, lang: Lang) {
        const obj = await this.getCurrencyNameByLang(id, lang);
        const objRate = await this.getCurrencyRate(id);

        return {
            id: id,
            scale: obj.scale,
            usdRate: objRate.usdRate,
            eurRate: objRate.eurRate,
            bynRate: objRate.bynRate,
            name: obj.name
        };
    }
}

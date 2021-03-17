export type Lang = 'en' | 'ru' | 'be';

export interface IAttraction {
    image: string,
    name: string,
    description: string
}

export interface ICountry {
    id: string,
    currId: string,
    country: string,
    capital: string,
    description: string,
    image: string,
    attractionList: IAttraction[],
    videoId: string,
    offsetSec: number,
    weatherID: number,
    iso3166Alpha3 : string,

}

export interface ICurrency {
    id: string,
    name: string,
    scale: string,
    usdRate: string,
    eurRate: string,
    bynRate: string
}

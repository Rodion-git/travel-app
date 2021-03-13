export type Lang = 'en' | 'ru' | 'be';

export interface IAttraction {
    image: string,
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
    videoId: string
}

export interface ICurrency {
    id: string,
    name: string,
    scale: string,
    usdRate: string,
    eurRate: string,
    bynRate: string
}

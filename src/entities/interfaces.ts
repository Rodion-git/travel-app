export type Lang = 'en' | 'ru' | 'be';

export interface IAttraction {
    image: string,
    description: string
}

export interface ICountry {
    id: number,
    currId: string,
    country: string,
    capital: string,
    description: string,
    image: string,
    attractionList: IAttraction[],
    videoId: string
}

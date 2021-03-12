export interface ITranslate {
    en: string,
    ru: string,
    be: string
}

export interface IAttraction {
    image: string,
    description: ITranslate
}

export interface ICountry {
    id: number,
    country: ITranslate,
    capital: ITranslate,
    description: ITranslate,
    image: string,
    attractionList: IAttraction[],
    videoId: string

}

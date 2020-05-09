/* eslint-disable @typescript-eslint/interface-name-prefix */
interface IAdminCodes1 {
    ISO3166_2: string;
}

export interface IRootObjectModel {
    adminCode1: string;
    lng: string;
    geonameId: number;
    toponymName: string;
    countryId: string;
    fcl: string;
    population: number;
    countryCode: string;
    name: string;
    fclName: string;
    adminCodes1: IAdminCodes1;
    countryName: string;
    fcodeName: string;
    adminName1: string;
    lat: string;
    fcode: string;
}

interface ICoord {
    lon: number
    lat: number
}

interface IWeather {
    id: number
    main: string
    description: string
    icon: string
}

interface IMain {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

interface IWind {
    speed: number
    deg: number
}

interface IClouds {
    all: number
}

interface ISys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}

export interface IRootObjectWeatherModel {
    coord: ICoord
    weather: IWeather[]
    base: string
    main: IMain
    visibility: number
    wind: IWind
    clouds: IClouds
    dt: number
    sys: ISys
    timezone: number
    id: number
    name: string
    cod: number
}

/* eslint-disable @typescript-eslint/interface-name-prefix */

export interface IWeather {
    PlaceName: string
    MainWeather: string,
    DescriptionWeather: string,
    Temperature: number,
    ThermalSensation: number,
    MinTemperature: number,
    MaxTemperature: number,
    Pressure: number,
    Humidity: number
}

export interface IWeatherService {
    GetWeatherInfosAsync(placeName: string): Promise<IWeather>
}

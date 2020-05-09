import { IWeather } from '../interfaces/weather.interface';

class Weather implements IWeather {
    public PlaceName: string
    public MainWeather: string
    public DescriptionWeather: string
    public Temperature: number
    public ThermalSensation: number
    public MinTemperature: number
    public MaxTemperature: number
    public Pressure: number
    public Humidity: number

    constructor (weather: IWeather) {
      this.PlaceName = weather.PlaceName;
      this.MainWeather = weather.MainWeather;
      this.DescriptionWeather = weather.DescriptionWeather;
      this.Temperature = weather.Temperature;
      this.ThermalSensation = weather.ThermalSensation;
      this.MinTemperature = weather.MinTemperature;
      this.MaxTemperature = weather.MaxTemperature;
      this.Pressure = weather.Pressure;
      this.Humidity = weather.Humidity;
    }
}

export default Weather;

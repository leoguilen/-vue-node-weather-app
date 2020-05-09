import { IWeatherService, IWeather } from '../interfaces/weather.interface';
import { injectable, inject } from 'inversify';
import { IRootObjectService } from '../../rootObject/interfaces/rootObject.interface';
import { RootObjectService } from '../../rootObject/services/rootObject.service';
import { IRootObjectWeatherModel } from '../../rootObject/model/rootObject.model';

@injectable()
export class WeatherService implements IWeatherService {
  private readonly _rootObjectService : IRootObjectService

  public constructor (
      @inject(RootObjectService) rootObjectService: IRootObjectService
  ) {
    this._rootObjectService = rootObjectService;
  }

  async GetWeatherInfosAsync (placeName: string): Promise<IWeather> {
    let rootWeatherObj: IRootObjectWeatherModel;
    let weatherResult: IWeather;

    try {
      rootWeatherObj = await this._rootObjectService.GetRootObjectWeatherAsync(placeName);
    } catch (error) {
      throw Error(error);
    }

    if (rootWeatherObj !== null || rootWeatherObj !== undefined) {
      weatherResult = {
        PlaceName: rootWeatherObj.name,
        MainWeather: rootWeatherObj.weather[0].main,
        DescriptionWeather: rootWeatherObj.weather[0].description,
        Temperature: rootWeatherObj.main.temp,
        ThermalSensation: rootWeatherObj.main.feels_like,
        MinTemperature: rootWeatherObj.main.temp_min,
        MaxTemperature: rootWeatherObj.main.temp_max,
        Pressure: rootWeatherObj.main.pressure,
        Humidity: rootWeatherObj.main.humidity
      };
    } else {
      throw Error('Array not have any element');
    }

    return weatherResult;
  }
}

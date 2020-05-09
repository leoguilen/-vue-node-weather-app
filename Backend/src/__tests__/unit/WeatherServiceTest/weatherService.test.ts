import { IWeatherService } from '../../../api/weather/interfaces/weather.interface';
import { WeatherService } from '../../../api/weather/services/weather.service';
import DIContainer from '../../../config/inversify.config';

const _weatherService: IWeatherService = DIContainer.resolve<IWeatherService>(WeatherService);

describe('GetWeatherInfosAsync', () => {
  it('Should be not returned null or empty', async () => {
    const placeName = 'Atibaia';

    const weatherObjResult = await _weatherService.GetWeatherInfosAsync(placeName);

    expect(weatherObjResult).not.toBeNull();
    expect(weatherObjResult).not.toBeUndefined();
  });

  it('Should be returned object contained weather infos in state or city passed in params', async () => {
    const placeName = 'Atibaia';

    const weatherObjResult = await _weatherService.GetWeatherInfosAsync(placeName);

    expect(weatherObjResult).toHaveProperty('MainWeather');
    expect(weatherObjResult).toHaveProperty('DescriptionWeather');
    expect(weatherObjResult).toHaveProperty('Temperature');
    expect(weatherObjResult).toHaveProperty('ThermalSensation');
    expect(weatherObjResult).toHaveProperty('MinTemperature');
    expect(weatherObjResult).toHaveProperty('MaxTemperature');
    expect(weatherObjResult).toHaveProperty('Pressure');
    expect(weatherObjResult).toHaveProperty('Humidity');
  });
});

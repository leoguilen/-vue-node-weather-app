import { ICityService, ICity } from '../../../api/city/interfaces/city.interface';
import { CityService } from '../../../api/city/services/city.service';
import DIContainer from '../../../config/inversify.config';

const _cityService: ICityService = DIContainer.resolve<ICityService>(CityService);

describe('GetAllCitiesAsync Method', () => {
  it('should not be returned array null or empty', async () => {
    const stateGeoId = '3407762';
    const citiesResult: ICity[] = await _cityService.GetAllCitiesAsync(stateGeoId);

    expect(citiesResult).not.toBeNull();
    expect(citiesResult.length).toBeGreaterThan(10);
  });

  it('should contains in the first object the city "Amapá"', async () => {
    const stateGeoId = '3407762';
    const expectedFirstCity: ICity = {
      cod: '03',
      geoId: 6319493,
      cityName: 'Amapá',
      stateName: 'Amapá',
      stateCode: 'AP',
      countryName: 'Brazil',
      countryCode: 'BR'
    };

    const citiesResult: ICity[] = await _cityService.GetAllCitiesAsync(stateGeoId);

    expect(citiesResult).toContainEqual<ICity>(expectedFirstCity);
  });

  it('should contains in the last object the city "Vitória do Jari"', async () => {
    const stateGeoId = '3407762';
    const expectedLastCity: ICity = {
      cod: '03',
      geoId: 6319497,
      cityName: 'Vitória do Jari',
      stateName: 'Amapá',
      stateCode: 'AP',
      countryName: 'Brazil',
      countryCode: 'BR'
    };

    const citiesResult: ICity[] = await _cityService.GetAllCitiesAsync(stateGeoId);

    expect(citiesResult).toContainEqual<ICity>(expectedLastCity);
  });

  it('should be throw erro when stateGeoId is invalid', async () => {
    const invalidStateGeoId = '1234';

    const citiesResult = await _cityService
      .GetAllCitiesAsync(invalidStateGeoId)
      .catch((err) => expect(err.message)
        .toBe('Array not have any element'));
  });
});

describe('GetCityByGeoIdAsync Method', () => {
  const stateGeoId = '3448433';
  const cityGeoId = 6322114;

  it('should not be returned object null or empty', async () => {
    const city = _cityService.GetCityByGeoIdAsync(stateGeoId, cityGeoId);

    expect(city).not.toBeNull();
    expect(city).not.toBeUndefined();
  });

  it('should be returned city by geoId', async () => {
    const expectedCity: ICity =
    {
      cod: '27',
      geoId: cityGeoId,
      cityName: 'Atibaia',
      stateName: 'São Paulo',
      stateCode: 'SP',
      countryName: 'Brazil',
      countryCode: 'BR'
    };

    const city = await _cityService.GetCityByGeoIdAsync(stateGeoId, cityGeoId);

    expect(city).toEqual(expectedCity);
  });

  it('should be throw new error when geoId not exist', async () => {
    const invalidGeoId = 1234;

    const cityResult = await _cityService
      .GetCityByGeoIdAsync(stateGeoId, invalidGeoId)
      .catch((ex) => expect(ex.message)
        .toBe('ERROR (GetCityByGeoId) GeoId inválido. Cidade não encontrada!'));
  });
});

describe('GetCityByNameAsync Method', () => {
  const stateGeoId = '3448433';
  const cityName = 'Bragança Paulista';

  it('should not be returned object null or empty', async () => {
    const city = _cityService.GetCityByNameAsync(stateGeoId, cityName);

    expect(city).not.toBeNull();
    expect(city).not.toBeUndefined();
  });

  it('should be returned city by geoId', async () => {
    const expectedCity: ICity =
    {
      cod: '27',
      geoId: 6322152,
      cityName: cityName,
      stateName: 'São Paulo',
      stateCode: 'SP',
      countryName: 'Brazil',
      countryCode: 'BR'
    };

    const city = await _cityService.GetCityByNameAsync(stateGeoId, cityName);

    expect(city).toEqual(expectedCity);
  });

  it('should be throw new error when geoId not exist', async () => {
    const invalidName = 'cidade invalida';

    const cityResult = await _cityService
      .GetCityByNameAsync(stateGeoId, invalidName)
      .catch((ex) => expect(ex.message)
        .toBe('ERROR (GetCityByNameAsync) Nome inválido. Cidade não encontrada!'));
  });
});

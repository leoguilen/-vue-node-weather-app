import 'reflect-metadata';
import { IRootObjectModel, IRootObjectWeatherModel } from '../../../api/rootObject/model/rootObject.model';
import { IRootObjectService } from '../../../api/rootObject/interfaces/rootObject.interface';
import { RootObjectService } from '../../../api/rootObject/services/rootObject.service';
import DIContainer from '../../../config/inversify.config';

const _rootObjService: IRootObjectService = DIContainer.resolve<IRootObjectService>(RootObjectService);

describe('GetListRootObjectModelState method', () => {
  it('Should be returned object list contains brazilian states', async () => {
    const rootObjects: IRootObjectModel[] =
      await _rootObjService.GetListRootObjectModelStateAsync();

    expect(rootObjects).not.toBeNull();
    expect(rootObjects).toHaveLength(27);
    expect(rootObjects[0].toponymName).toBe('Acre');
    expect(rootObjects[rootObjects.length - 1].toponymName).toBe('Tocantins');
  });
});

describe('GetListRootObjectModelCityAsync', () => {
  it('Should be returned object list contains all cities from brazilian states', async () => {
    const stateGeoId = '3665474';

    const rootObjects: IRootObjectModel[] =
      await _rootObjService.GetListRootObjectModelCityAsync(stateGeoId);

    expect(rootObjects).not.toBeNull();
    expect(rootObjects).toHaveLength(22);
    expect(rootObjects[0].toponymName).toBe('Acrelândia');
    expect(rootObjects[rootObjects.length - 1].toponymName).toBe('Xapuri');
  });
});

describe('GetRootObjectWeatherAsync', () => {
  it('Should be returned object contains weather infos from state or city passing by parameter ', async () => {
    const cityName = 'Atibaia';

    const rootWeatherObj: IRootObjectWeatherModel =
      await _rootObjService.GetRootObjectWeatherAsync(cityName);

    expect(rootWeatherObj).not.toBeNull();
    expect(rootWeatherObj).not.toBeUndefined();
    expect(rootWeatherObj).toHaveProperty('coord');
    expect(rootWeatherObj).toHaveProperty('weather');
    expect(rootWeatherObj).toHaveProperty('base');
    expect(rootWeatherObj).toHaveProperty('main');
    expect(rootWeatherObj).toHaveProperty('visibility');
    expect(rootWeatherObj).toHaveProperty('wind');
    expect(rootWeatherObj).toHaveProperty('clouds');
    expect(rootWeatherObj).toHaveProperty('dt');
    expect(rootWeatherObj).toHaveProperty('sys');
    expect(rootWeatherObj).toHaveProperty('coord');
    expect(rootWeatherObj.name).toBe(cityName);
  });
});

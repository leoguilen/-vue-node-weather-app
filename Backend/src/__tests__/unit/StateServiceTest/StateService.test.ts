import { IStateService, IState } from '../../../api/state/interfaces/state.interface';
import { StateService } from '../../../api/state/services/state.service';
import DIContainer from '../../../config/inversify.config';

const _stateService: IStateService = DIContainer.resolve<IStateService>(StateService);

describe('GetAllStateAsync Method', () => {
  it('should not be returned array null or empty', async () => {
    let statesResult: IState[] = [];

    statesResult = await _stateService.GetAllStatesAsync();

    expect(statesResult).not.toBeNull();
    expect(statesResult).toHaveLength(27);
  });

  it('should be valid the first state Acre', async () => {
    let statesResult: IState[] = [];
    const expectedFirstState: IState =
    {
      cod: '01',
      geoId: 3665474,
      stateName: 'Acre',
      stateCode: 'AC',
      countryName: 'Brazil',
      countryCode: 'BR'
    };

    statesResult = await _stateService.GetAllStatesAsync();

    expect(statesResult).toContainEqual<IState>(expectedFirstState);
  });
});

describe('GetStateByGeoIdAsync Method', () => {
  const validGeoId = 3448433;

  it('should not be returned object null or empty ', async () => {
    const state = await _stateService.GetStateByGeoIdAsync(validGeoId);

    expect(state).not.toBeNull();
    expect(state).not.toBeUndefined();
  });

  it('should be returned state by geoId', async () => {
    const expectedState: IState =
    {
      cod: '27',
      geoId: 3448433,
      stateName: 'São Paulo',
      stateCode: 'SP',
      countryName: 'Brazil',
      countryCode: 'BR'
    };

    const state = await _stateService.GetStateByGeoIdAsync(validGeoId);

    expect(state).toEqual(expectedState);
  });

  it('should be throw new error when geoId not exist', async () => {
    const invalidGeoId = 1234;

    const stateResult = await _stateService
      .GetStateByGeoIdAsync(invalidGeoId)
      .catch((ex) => expect(ex.message)
        .toBe('ERROR (GetStateByGeoIdAsync) GeoId inválido. Estado não encontrado!'));
  });
});

describe('GetStateByNameAsync Method', () => {
  it('should not be returned object null or empty ', async () => {
    const validCityName = 'Rio de Janeiro';

    const state = await _stateService.GetStateByNameAsync(validCityName);

    expect(state).not.toBeNull();
    expect(state).not.toBeUndefined();
  });

  it('should be returned state by city name', async () => {
    const validCityName = 'Rio de Janeiro';
    const expectedState: IState =
    {
      cod: '21',
      geoId: 3451189,
      stateName: 'Rio de Janeiro',
      stateCode: 'RJ',
      countryName: 'Brazil',
      countryCode: 'BR'
    };

    const state = await _stateService.GetStateByNameAsync(validCityName);

    expect(state).toEqual(expectedState);
  });

  it('should be throw new error when city name not exist', async () => {
    const invalidCityName = 'Cidade que não existe';

    const stateResult = await _stateService
      .GetStateByNameAsync(invalidCityName)
      .catch((ex) => expect(ex.message)
        .toBe('ERROR (GetStateByNameAsync) Nome do estado inválido. Estado não encontrado!'));
  });
});

import 'reflect-metadata'
import { IStateService, IState } from '../interfaces/state.interface'
import { ICityService } from '../../city/interfaces/city.interface'
import { CityService } from '../../city/services/city.service'
import { IRootObjectService } from '../../rootObject/interfaces/rootObject.interface'
import { RootObjectService } from '../../rootObject/services/rootObject.service'
import { IRootObjectModel } from '../../rootObject/model/rootObject.model'
import { injectable, inject } from 'inversify'
import { FormatName } from '../../../utils/string.utils'

@injectable()
export class StateService implements IStateService {
  private readonly _rootObjectService : IRootObjectService;
  private readonly _cityService: ICityService

  public constructor (
    @inject(RootObjectService) rootObjectService: IRootObjectService,
    @inject(CityService) cityService: ICityService
  ) {
    this._rootObjectService = rootObjectService
    this._cityService = cityService
  }

  async GetAllStatesAsync (): Promise<IState[]> {
    let rootObjs: IRootObjectModel[]
    const states: IState[] = []

    try {
      rootObjs = await this._rootObjectService.GetListRootObjectModelStateAsync()
    } catch (error) {
      throw Error(error)
    }

    if (rootObjs !== null || rootObjs !== undefined) {
      rootObjs.forEach(rootEl => {
        const state: IState = {
          cod: rootEl.adminCode1,
          geoId: rootEl.geonameId,
          stateName: rootEl.name,
          stateCode: rootEl.adminCodes1.ISO3166_2,
          countryName: rootEl.countryName,
          countryCode: rootEl.countryCode
        }

        states.push(state)
      })
    } else {
      throw Error('Array not have any element')
    }

    return states
  }

  async GetStateByGeoIdAsync (geoId: number): Promise<IState> {
    const allStates: IState[] = await this.GetAllStatesAsync()

    const stateResult = allStates.find((state) => {
      return state.geoId === geoId
    })

    if (stateResult === null || stateResult === undefined) {
      throw Error('ERROR (GetStateByGeoIdAsync) GeoId inválido. Estado não encontrado!')
    }

    return stateResult
  }

  async GetStateByNameAsync (stateName: string): Promise<IState> {
    const allStates: IState[] = await this.GetAllStatesAsync()

    stateName = FormatName(stateName)

    const stateResult = allStates.find((state) => {
      return state.stateName === stateName
    })

    if (stateResult === null || stateResult === undefined) {
      throw Error('ERROR (GetStateByNameAsync) Nome do estado inválido. Estado não encontrado!')
    }

    return stateResult
  }
}

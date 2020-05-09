import { IRootObjectModel, IRootObjectWeatherModel } from '../model/rootObject.model'

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IRootObjectService {
    GetListRootObjectModelStateAsync(): Promise<IRootObjectModel[]>
    GetListRootObjectModelCityAsync(stateGeoId: string): Promise<IRootObjectModel[]>
    GetRootObjectWeatherAsync(placeName: string): Promise<IRootObjectWeatherModel>
}

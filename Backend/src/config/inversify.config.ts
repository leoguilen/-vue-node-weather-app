import { Container } from 'inversify'
import { RootObjectService } from '../api/rootObject/services/rootObject.service'
import { StateService } from '../api/state/services/state.service'
import { CityService } from '../api/city/services/city.service'
import { IRootObjectService } from '../api/rootObject/interfaces/rootObject.interface'
import { IStateService } from '../api/state/interfaces/state.interface'
import { ICityService } from '../api/city/interfaces/city.interface'
import { IWeatherService } from '../api/weather/interfaces/weather.interface'
import { WeatherService } from '../api/weather/services/weather.service'

const DIContainer = new Container()

DIContainer.bind<IRootObjectService>(RootObjectService).to(RootObjectService).inSingletonScope()
DIContainer.bind<IWeatherService>(WeatherService).to(WeatherService).inSingletonScope()
DIContainer.bind<IStateService>(StateService).to(StateService).inSingletonScope()
DIContainer.bind<ICityService>(CityService).to(CityService).inSingletonScope()

export default DIContainer

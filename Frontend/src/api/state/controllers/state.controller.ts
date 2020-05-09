import DIContainer from '../../../config/inversify.config'
import { Request, Response } from 'express'
import { StateService } from '../services/state.service'
import { IStateService } from '../interfaces/state.interface'

const _stateService: IStateService = DIContainer.resolve<IStateService>(StateService)

class StateController {
  async getAll (req: Request, res: Response): Promise<void> {
    await _stateService.GetAllStatesAsync()
      .then((result) => {
        res.status(200)
        res.json(result)
      })
      .catch((error: Error) => {
        res.status(500)
        res.send(`Detalhes do erro: ${error.stack}`)
      })
  }

  async getByGeoId (req: Request, res: Response): Promise<void> {
    const reqId: number = parseInt(req.params.id)

    await _stateService.GetStateByGeoIdAsync(reqId)
      .then((result) => {
        res.status(200)
        res.json(result)
      })
      .catch((error) => {
        res.status(500)
        res.send(`Detalhes do erro: ${error.stack}`)
      })
  }

  async getByName (req: Request, res: Response): Promise<void> {
    const reqName: string = req.params.name

    await _stateService.GetStateByNameAsync(reqName)
      .then((result) => {
        res.status(200)
        res.json(result)
      })
      .catch((error) => {
        res.status(500)
        res.send(`Detalhes do erro: ${error.stack}`)
      })
  }
}

export default new StateController()

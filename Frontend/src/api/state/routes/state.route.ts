import { Router } from 'express'

import StateController from '../controllers/state.controller'

const stateRoutes = Router()

stateRoutes.get('/states', StateController.getAll)
stateRoutes.get('/states/:id', StateController.getByGeoId)
stateRoutes.get('/states/name/:name', StateController.getByName)

export default stateRoutes

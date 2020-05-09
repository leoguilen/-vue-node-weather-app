import { Router } from 'express'
import CityController from '../controllers/city.controller'

const cityRoutes = Router()

cityRoutes.get('/cities/state/:id', CityController.getAllByStateId)
cityRoutes.get('/cities/byid', CityController.getbyGeoId)
cityRoutes.get('/cities/byname', CityController.getbyName)

export default cityRoutes

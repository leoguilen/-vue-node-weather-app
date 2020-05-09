import { Router } from 'express';
import path from 'path';

// importações das rotas
import stateRoutes from './state/routes/state.route';
import cityRoutes from './city/routes/city.route';
import weatherRoutes from './weather/routes/weather.route';

const index = Router();

index.get('/', (req, res) => {
  res.type('html');
  res.sendFile(path.resolve('server', 'api', 'ListaDasRotas.html'));
});

const routes = [stateRoutes, cityRoutes, weatherRoutes, index]; // Aqui vão as minhas rotas

export default routes;

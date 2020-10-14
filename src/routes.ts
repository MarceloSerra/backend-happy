import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//MVC
//MODEL : Modelo, representação da tabela do banco (de uma entidade)
//VIEW : Front, visualização
//CONTROLLER : Rotas //INDEX, SHOW, CREATE, UPDATE, DELETE

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;

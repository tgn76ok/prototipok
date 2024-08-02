import { Router } from 'express';
import EventoController from '../controllers/EventoController';


import AuthMiddleware from '../middlewares/auth';
const validateResponserMiddleware = require("../middlewares/validateResponse");


const router = new Router();
router.use(validateResponserMiddleware);


router.get('/', EventoController.index); // Lista usuários

router.get('/:id', EventoController.show); // Lista usuário


router.post('/', EventoController.store); 


router.put('/:id',  EventoController.update);


router.delete('/:id',  EventoController.delete);




export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/

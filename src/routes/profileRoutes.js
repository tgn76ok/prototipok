import { Router } from 'express';
import profileController from '../controllers/ProfileController';

import loginRequired from '../middlewares/loginRequired';



const router = new Router();

// Não deveria existir
router.get('/', profileController.index); // Lista usuários

router.get('/:id', profileController.show); // Lista usuário

router.post('/',profileController.store);
router.post('/professor',profileController.storeProfessor);
router.post('/admin',profileController.storeAdmin);


router.put('/', profileController.update);
router.delete('/', profileController.delete);

export default router;

import { Router } from 'express';

import PatrimonioController from '../controllers/PatrimonioController.js';
import PatrimonioService from '../services/PatrimonioService.js';
import PatrimonioRepository from '../repositories/PatrimonioRepository.js';

const router = Router();

const repository = new PatrimonioRepository();
const service = new PatrimonioService(repository);
const controller = new PatrimonioController(service);

router.get('/', controller.listar);
router.get('/:id', controller.buscar);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

export default router;

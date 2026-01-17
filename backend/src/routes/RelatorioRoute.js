import { Router } from 'express';

import RelatorioController from '../controllers/RelatorioController.js';
import RelatorioService from '../services/RelatorioService.js';
import PatrimonioRepository from '../repositories/PatrimonioRepository.js';

const router = Router();

const patrimonioRepository = new PatrimonioRepository();
const service = new RelatorioService(patrimonioRepository);
const controller = new RelatorioController(service);

router.get('/', controller.gerarRelatorioCompleto);
router.get('/:id', controller.gerarRelatorioIndividual);

export default router;

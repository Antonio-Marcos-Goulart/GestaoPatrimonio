import express from "express";
import { RelatorioRepository } from "../repositories/RelatorioRepository.js";
import { RelatorioService } from "../services/RelatorioService.js";
import { RelatorioController } from "../controllers/RelatorioController.js";
import db from "../database/db.js"; // sua conexão

const router = express.Router();

const repository = new RelatorioRepository(db);
const service = new RelatorioService(repository);
const controller = new RelatorioController(service);

router.get("/relatorios/patrimonios", controller.gerarRelatorioCompleto);
router.get("/relatorios/patrimonios/:id", controller.gerarRelatorioIndividual);

export default router;

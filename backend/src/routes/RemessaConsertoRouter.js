// src/routes/RemessaConsertoRoute.js

import express from "express";
import { RemessaConsertoRepository } from "../repository/RemessaConsertoRepository.js";
import RemessaConsertoService from "../service/RemessaConsertoService.js";
import { RemessaConsertoController } from "../controller/RemessaConsertoController.js";
import db from "../database/db.js";

const router = express.Router();

// Injeções de dependência
const repository = new RemessaConsertoRepository(db);
const service = new RemessaConsertoService(repository);
const controller = new RemessaConsertoController(service);

// Rotas (padrão parecido com o de Patrimônio)
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

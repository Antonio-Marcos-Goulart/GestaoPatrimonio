import express from "express";
import { PatrimonioRepository } from "../repository/PatrimonioRepository.js";
import { PatrimonioService } from "../service/PatrimonioService.js";
import { PatrimonioController } from "../controller/PatrimonioController.js";
import db from "../database/db.js"; // a conexão do seu ORM/BD

const router = express.Router();

// Injeções de dependência
const repository = new PatrimonioRepository(db);
const service = new PatrimonioService(repository);
const controller = new PatrimonioController(service);

// Rotas
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

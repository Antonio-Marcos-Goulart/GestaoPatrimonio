import { Router } from "express";
import { RemessaConsertoController } from "../controllers/RemessaConsertoController.js";
import RemessaConsertoService from "../services/RemessaConsertoService.js";
import RemessaConsertoRepository from "../repositories/RemessaConsertoRepository.js";

const router = Router();

const repository = new RemessaConsertoRepository();
const service = new RemessaConsertoService(repository);
const controller = new RemessaConsertoController(service);

router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

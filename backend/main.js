import PatrimonioRepository from "./repository/PatrimonioRepository.js";
import PatrimonioService from "./services/PatrimonioService.js";
import PatrimonioController from "./controllers/PatrimonioController.js";
import DOMController from "./controllers/DOMController.js"; 
import express from "express";
import reportRoutes from "./routes/reportRoutes.js";
import patrimonioRoutes from "./routes/PatrimonioRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/patrimonios", patrimonioRoutes);
app.use("/api/relatorios", reportRoutes);

export default class Main {
  constructor() {
    this.init();
  }

  init() {
    console.log("Inicializando sistema de gestão de patrimônio...");

    // REPOSITORY
    const patrimonioRepository = new PatrimonioRepository();

    // SERVICE
    const patrimonioService = new PatrimonioService(patrimonioRepository);

    // CONTROLLER
    const patrimonioController = new PatrimonioController(patrimonioService);

    // DOM CONTROLLER → recebe controllers do sistema
    this.dom = new DOMController({
      patrimonioController
    });

    this.dom.init(); // ativa listeners, toggle menu, troca de telas

    console.log("Sistema iniciado com sucesso!");
  }
}

// Inicializar automaticamente ao carregar o JS
window.addEventListener("DOMContentLoaded", () => {
  new Main();
});

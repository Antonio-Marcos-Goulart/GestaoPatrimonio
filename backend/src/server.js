require('dotenv').config(); 

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

require("./config/database");

const app = express();
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /teste:
 *   get:
 *     summary: Rota de teste
 *     responses:
 *       200:
 *         description: OK
 */
app.get("/teste", (req, res) => {
  res.json({ message: "Swagger OK" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger em http://localhost:${PORT}/api-docs`);
});

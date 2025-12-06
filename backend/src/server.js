const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

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

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
  console.log("Swagger em http://localhost:3000/api-docs");
});

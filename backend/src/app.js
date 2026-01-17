import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';
import './config/database.js';

import patrimonioRoutes from './routes/PatrimonioRoute.js';
import remessaRoutes from './routes/RemessaConsertoRoute.js';
import relatorioRoutes from './routes/RelatorioRoute.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.use('/api/patrimonios', patrimonioRoutes);
app.use('/api/remessas', remessaRoutes);
app.use('/api/relatorios', relatorioRoutes);

// Health check
app.get('/api/health', (_, res) => {
  res.json({ status: 'OK' });
});

export default app;

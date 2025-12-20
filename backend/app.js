const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares ESSENCIAIS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de erro
app.use((err, req, res, next) => {
    console.error('Erro:', err.message);
    res.status(err.status || 500).json({
        error: err.message || 'Erro interno do servidor'
    });
});

// Rotas
const patrimonioRoutes = require('./routes/PatrimonioRoute');
const remessaRoutes = require('./routes/RemessaConsertoRoute');
const relatorioRoutes = require('./routes/RelatorioRoute');

app.use('/api/patrimonios', patrimonioRoutes);
app.use('/api/remessas', remessaRoutes);
app.use('/api/relatorios', relatorioRoutes);

// Servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});
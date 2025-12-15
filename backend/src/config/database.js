const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'patrimonio',
    max: 20, 
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

// Testar conexão ao iniciar
pool.on('connect', () => {
    console.log('Conectado ao banco de dados');
});

pool.on('error', (err) => {
    console.error('Erro na conexão com o banco:', err.message);
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool
};
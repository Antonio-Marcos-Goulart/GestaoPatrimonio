const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// FORÇA CONEXÃO   
(async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Conectado ao banco de dados');
  } catch (err) {
    console.error('Erro ao conectar no banco:', err.message);
  }
})();

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};

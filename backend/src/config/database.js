import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'patrimonio',
    password: '2005',
    port: 5432,
});

// Testar a conexão
pool.connect()
  .then(() => console.log('Conectado ao PostgreSQL!'))
  .catch(err => console.error('Erro ao conectar:', err));

export default pool;
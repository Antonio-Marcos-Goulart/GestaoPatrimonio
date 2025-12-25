require("dotenv").config(); // carrega o env

const { defineConfig } = require("prisma/config");

module.exports = defineConfig({
  migrations: {
    path: "prisma/migrations",
  },
  datasource: { 
    provider: "postgresql",
    url: process.env.DATABASE_URL,
  },
});

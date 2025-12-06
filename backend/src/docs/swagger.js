const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Backend",
      version: "1.0.0",
      description: "Documentação da API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },

  apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;

/*
public OpenAPI OpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("LUMINA API REST")
                        .version("1.0.0")
                        .description("Documentação API REST Lumina")
                        .contact(new Contact()
                                .name("Lucca P. Müller")
                                .email("lumina.unibave@gmail.com")));
    }
*/
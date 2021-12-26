const swaggerUi = require('swagger-ui-express');
import swaggerJsdoc from "swagger-jsdoc";


const configureSwagger = (app, port) => {

    const options: swaggerJsdoc.Options = {
        definition: {
            openapi: '3.0.0',
            info: { title: 'API', version: '1.0.0' },
        },
        apis: ["./src/routes.ts"],
    }

    const swaggerSpec = swaggerJsdoc(options);

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
      });
    
      console.log(`Docs available at http://localhost:${port}/docs`);

};

module.exports = configureSwagger;
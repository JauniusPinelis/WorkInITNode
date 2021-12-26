import { Application } from "express";

const app:Application = require("./src/app");
const configureSwagger = require('./src/utils/configureSwagger');

const connectDatabase = require('./src/configs/database');

const port = process.env.PORT || 3000;

configureSwagger(app, port);

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connectDatabase();
});


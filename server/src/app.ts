import express, { Application } from 'express';
import dotenv from 'dotenv';

const registerRoutes = require('./routes/routes.ts');
const registerSchedulers = require('./utils/registerSchedulers');
const handleErrorsMiddleware = require('./middlewares/error-handling.middleware');


dotenv.config();

const app: Application = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

registerRoutes(app);
registerSchedulers();

app.use(handleErrorsMiddleware());

module.exports = app;

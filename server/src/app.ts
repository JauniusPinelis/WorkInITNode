import express, { Application } from 'express';
import dotenv from 'dotenv';

import registerRoutes from './routes/routes';

dotenv.config();

const app: Application = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

registerRoutes(app);

module.exports = app;

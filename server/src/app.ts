import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

require('./routes/swagger.route')(app);
require('./routes/health.route')(app);
require('./routes/scrape.route')(app);

module.exports = app;
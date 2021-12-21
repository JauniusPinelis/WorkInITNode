import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

require('./routes/swagger.route')(app);
require('./routes/health.route')(app);
require('./routes/scrape.route')(app);

module.exports = app;

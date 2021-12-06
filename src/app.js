const express = require('express');
require('dotenv').config();
require('./configs/database');


const app = express();

require('./routes/swagger.route')(app);
require('./routes/health.route')(app);

module.exports = app;
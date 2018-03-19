const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')();
require('dotenv').config();

//require in routers
const reports = require('./routes/reports');

app.use(morgan('dev'));

app.use(cors);

// api routes
app.use('/api/reports', reports);

module.exports = app;
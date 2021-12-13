const express = require('express');
const app = express();
const db = require('./database')
app.use(express.json());
app.use(require('./routes/index'));
app.use(require('./routes/productos'));

module.exports = app;


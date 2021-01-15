const express = require('express');
const app = express();
const db = require('./database');
const port = process.env.PORT;

app.listen(port);
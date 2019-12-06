require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const pc = require('./controller');
app.use(express.json());

const { SERVICE_PORT, CONNECTION_STRING } = process.env;





app.listen(SERVICE_PORT, () => {console.log(`Server listening on port: ${SERVICE_PORT}`)});
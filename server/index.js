require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const pc = require('./controller');
app.use(express.json());

const { SERVICE_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('database connected!');
    app.set('db', db);
})

app.get('/api/inventory', pc.getAll);

app.post('/api/product', pc.post);

app.delete('/api/product/:id', pc.delete);

app.put('/api/product/:id', pc.update);



app.listen(SERVICE_PORT, () => {console.log(`Server listening on port: ${SERVICE_PORT}`)});
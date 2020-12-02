const express = require('express');
const app = express();

app.get('/api/athletes', (req, res) => {
    res.send('obteniendo recurso de atletas...');
});

app.get('/api/sports', (req, res) => {
    res.send('obteniendo recurso de deportes...');
});

app.get('/', (req, res) => {
    res.send('Bienvenido amigo.');
});

app.listen(5000, () => {
    console.log('Estamos corriendo en el puerto 5000');
});
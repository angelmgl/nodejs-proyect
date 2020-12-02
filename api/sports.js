const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('obteniendo recurso de deportes...');
});

router.post('/', (req, res) => {
    res.send('creando recurso de deportes...');
});

router.put('/', (req, res) => {
    res.send('editando recurso de deportes...');
});

router.delete('/', (req, res) => {
    res.send('borrando recurso de deportes...');
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('obteniendo recurso de atletas...');
});

router.post('/', (req, res) => {
    res.send('creando recurso de atletas...');
});

router.put('/', (req, res) => {
    res.send('editando recurso de atletas...');
});

router.delete('/', (req, res) => {
    res.send('borrando recurso de atletas...');
});

module.exports = router;
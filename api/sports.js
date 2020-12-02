const express = require('express');
const router = express.Router();

const Sport = require('../models/sports')

router.get('/', (req, res) => {
    res.send('obteniendo recurso de deportes...');
});

router.post('/', async (req, res, next) => {
    const sport = new Sport({
       name: req.body.name,
       playersPerTeam: req.body.playersPerTeam     
    });
    try {
        const saved = await sport.save();
        res.status(201).json(saved);
    } catch(error) {
        res.status(400);
        next(error);
    }
});

router.put('/', (req, res) => {
    res.send('editando recurso de deportes...');
});

router.delete('/', (req, res) => {
    res.send('borrando recurso de deportes...');
});

module.exports = router;
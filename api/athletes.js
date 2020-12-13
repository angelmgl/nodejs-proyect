const express = require('express');
const router = express.Router();

const Athlete = require('../models/athlete');

router.get('/', (req, res) => {
    res.send('obteniendo recurso de atletas...');
});

router.post('/', async (req, res, next) => {
    const athlete = new Athlete(req.body)
    try {
        const savedAthlete = await athlete.save();
        res.status(201).json(savedAthlete);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.put('/', (req, res) => {
    res.send('editando recurso de atletas...');
});

router.delete('/', (req, res) => {
    res.send('borrando recurso de atletas...');
});

module.exports = router;
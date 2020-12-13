const express = require('express');
const { findById } = require('../models/sport');
const router = express.Router();

const Sport = require('../models/sport')

router.get('/', async (req, res, next) => {
    try {
        const sports = await Sport.find();
        res.status(200).json(sports);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const sport = await Sport.findById(id);
        res.status(200).json(sport);
    } catch (error) {
        res.status(400);
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    const sport = new Sport(req.body);
    try {
        const savedSport = await sport.save();
        res.status(201).json(savedSport);
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
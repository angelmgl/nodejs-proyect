const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const athleteSchema = Schema({
    fistName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    },
    birthdate: Date,
    retired: Boolean,
    sports: [{
        type: mongoose.Types.ObjectId,
        ref: 'Sport',
        required: true
    }]
});

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;
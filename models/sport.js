const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    playersPerTeam: {
        type: Number,
        required: false
    }
});

const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;
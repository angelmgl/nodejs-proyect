const mongoose = require('mongoose');

const baseAtlas = 'mongodb+srv://admin:angel127@base.bghjk.mongodb.net/athletesDB?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(baseAtlas, options, err => {
    if (err) {
        console.log(`Ha ocurrido un error: ${err}`);
    } else {
        console.log(`Conexión a base de datos exitosa.`)
    }
});

module.exports = mongoose;
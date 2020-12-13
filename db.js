const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect(process.env.DB_LINK, options, err => {
    if (err) {
        console.log(`Ha ocurrido un error: ${err}`);
    } else {
        console.log(`Conexión a base de datos exitosa.`)
    }
});

module.exports = mongoose;
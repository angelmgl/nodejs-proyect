const express = require('express');
const middlewares = require('./middlewares');
const morgan = require('morgan')
const helmet = require('helmet');
//exportando routers
const api = require('./api');
//exportando base de datos
const db = require('./db');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use('/api', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(5000, () => {
    console.log('Estamos corriendo en el puerto 5000');
});
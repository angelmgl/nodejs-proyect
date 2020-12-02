const notFound = (req, res, next) => {
    res.status(404);
    const error = new Error('not found ' + req.originalUrl);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🐤' : err.stack
    });
};

module.exports = {
    notFound,
    errorHandler
};
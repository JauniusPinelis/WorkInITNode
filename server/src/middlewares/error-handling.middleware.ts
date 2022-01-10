const handleErrorsMiddleware = (err, req, res, next) => {
    return (err, req, res, next) => {
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({
            message: err.message,
            stack: err.stack
        });
    };
}

module.exports = handleErrorsMiddleware;
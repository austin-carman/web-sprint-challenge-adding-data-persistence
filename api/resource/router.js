const express = require('express');
const resourceRouter = express.Router();
const Resources = require('./model');

resourceRouter.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(next);
});

resourceRouter.post('/', (req, res, next) => {
    res.json({
        message: 'post resource'
    });
});

resourceRouter.use((err, req, res, next) => {
    res.json({
        status: 500,
        message: err.message,
        stack: err.stack
    });
});

module.exports = resourceRouter;

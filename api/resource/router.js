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
    Resources.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(next);
});

resourceRouter.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = resourceRouter;

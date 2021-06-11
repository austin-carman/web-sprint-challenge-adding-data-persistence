const express = require('express');
const resourceRouter = express.Router();

resourceRouter.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'resources resourceRouter working'
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

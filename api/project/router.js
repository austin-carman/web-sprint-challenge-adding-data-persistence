const express = require('express');
const projectRouter = express.Router();


projectRouter.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'projects api working'
    });
})

projectRouter.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something in the app is not working',
        message: err.message,
        stack: err.stack,
    })
});


module.exports = projectRouter;

const express = require('express');
const taskRouter = express.Router();


taskRouter.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'taskRouter is working'
    });
});

taskRouter.use((err, req, res, next) => {
    res.json({
        status: 500, 
        message: err.message,
        stack: err.stack
    });
});


module.exports = taskRouter;
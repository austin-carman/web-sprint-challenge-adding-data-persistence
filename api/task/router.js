const express = require('express');
const taskRouter = express.Router();
const Tasks = require('./model');


taskRouter.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(next);
});

taskRouter.post('/', (req, res, next) => {
    res.json({
        message: 'post tasks'
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
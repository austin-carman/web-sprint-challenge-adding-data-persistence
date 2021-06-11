const express = require('express');
const taskRouter = express.Router();
const Tasks = require('./model');
const { validateTask, validateProjectId } = require('./task-middleware');


taskRouter.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(next);
});

taskRouter.post('/', validateTask, validateProjectId, (req, res, next) => {
    Tasks.createTask(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(next);
});

taskRouter.use((err, req, res, next) => {
    res.json({
        status: 500, 
        message: err.message,
        stack: err.stack
    });
});


module.exports = taskRouter;
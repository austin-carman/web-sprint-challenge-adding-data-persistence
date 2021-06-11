const express = require('express');
const projectRouter = express.Router();
const Projects = require('./model');


projectRouter.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next);
});

projectRouter.post('/', (req, res, next) => {
    res.json({
        message: 'post projects'
    })
})

projectRouter.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something in the app is not working',
        message: err.message,
        stack: err.stack,
    });
});


module.exports = projectRouter;

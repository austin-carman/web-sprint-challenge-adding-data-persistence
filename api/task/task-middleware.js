const Projects = require('../project/model');

const validateTask = (req, res, next) => {
    const { task_description, project_id } = req.body;
    if (!task_description || !project_id) {
        res.status(400).json({
            status: 400,
            message: 'new tasks require a task description and valid project_id'
        })

        // ******* can you please explain why the code below doesn't work for the error? ******

        // I thought this was essentially the same as the above but displaying it through the err handling middleware in task-router on line 23?
        // Is there something I'm missing for this code below to work to process the errors?

        // next({ 
        //     status: 400,
        //     message: 'new tasks require a task description and valid project_id'
        // });

    } else {
        next()
    }
}

const validateProjectId = (req, res, next) => {
    const { project_id } = req.body;
    Projects.findProjectById(project_id)
        .then(project => {
            console.log('project from then', project);
            if(project) {
                console.log('project from if', project);
                next();
            } else {
                console.log('project id fake');
                res.status(400).json({
                    message: 'please provide a valid project_id'
                })
            }
        })
        .catch(next);
}

module.exports = { validateTask, validateProjectId }
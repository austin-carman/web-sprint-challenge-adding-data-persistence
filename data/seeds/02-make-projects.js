const projects = [
    {project_name: 'spray paint cornhole boards', project_description: 'optional', project_completed: '1'},
    {project_name: 'go swimming'}
]

const resources = [
    {resource_name: 'spray paint', resource_description: 'white paint'},
    {resource_name: 'city pool'}
]

const tasks = [
    {task_description: 'boards need to be painted for wedding next Saturday', task_notes: 'need to start', task_completed: 'true', project_id: 1},
    {task_description: 'swim', task_notes: 'optional', task_completed: true, project_id: 2}
]

const project_resources = [
    {project_id: 1, resource_id: 1},
    {project_id: 2, resource_id: 2}
]



exports.seed = async function (knex) {
   await knex('projects').insert(projects)
   await knex('resources').insert(resources)
   await knex('tasks').insert(tasks)
   await knex('project_resources').insert(project_resources)
};
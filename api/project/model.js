const db = require('../../data/dbConfig');


async function getProjects() {
    const rows = await db('projects')
    const projects = rows.map(project => {
            if (project.project_completed === 1) {
                return {...project, project_completed: true}
            } else {
                return {...project, project_completed: false}
            }
    });
    return projects;
}

async function getProjectById(project_id) {
    const project = await db('projects')
        .where('project_id', project_id);

    if (project[0].project_completed === 1) {
        return {...project[0], project_completed: true}
    } else {
        return {...project[0], project_completed: false}
    }

}

async function findProjectById(project_id) {
    const project = await db('projects')
        .where('project_id', project_id);
    console.log('project from model', project);

    return project[0];
}

async function createProject(project) {
    const [id] = await db('projects').insert(project);

    return getProjectById(id);
}


module.exports = { getProjects, createProject, findProjectById }
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


module.exports = { getProjects }
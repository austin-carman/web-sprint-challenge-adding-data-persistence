const db = require('../../data/dbConfig');

async function getTasks() {
    const rows = await db('tasks as t')
        .select('t.task_notes', 't.task_description', 't.task_completed', 'p.project_name', 'p.project_description')
        .join('projects as p', 't.project_id', '=', 'p.project_id')
    
    const tasks = rows.map(task => {
        if (task.task_completed ===1) {
            return {...task, task_completed: true}
        } else {
            return {...task, task_completed: false}
        }
    })

    return tasks;
}

module.exports = { getTasks };
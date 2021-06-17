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

async function getTaskById(task_id) {
    const task = await db('tasks')
        .where('task_id', task_id);

    if (task[0].task_completed === 1) {
        const completedTask = {...task[0], task_completed: true};
        return completedTask;
    } else {
        const falseTask = {...task[0], task_completed: false};
        return falseTask;
    }

}

async function createTask(task) {
    const [id] = await db('tasks').insert(task);

    return getTaskById(id);
}

module.exports = { getTasks, createTask, getTaskById };
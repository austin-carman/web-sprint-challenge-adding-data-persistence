const db = require('../../data/dbConfig');

async function getResources() {
    const rows = await db('resources');
    
    return rows;
}

async function getResourceById(resource_id) {
    const resource = await db('resources')
        .where('resource_id', resource_id);

    return resource[0];
}

async function createResource(resource) {
    const [id] = await db('resources').insert(resource);

    return getResourceById(id);
}

module.exports = { getResources, createResource };
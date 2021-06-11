const db = require('../../data/dbConfig');

async function getResources() {
    const rows = await db('resources');
    
    return rows;
}

module.exports = { getResources };
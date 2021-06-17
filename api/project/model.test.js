const db = require('../../data/dbConfig');
const Project = require('../project/model');

test('sanity', () => {
    expect(process.env.Node_ENV).toBe(undefined)
})

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

afterAll(async () => {
    await db.destroy()
})

describe('get projects model', () => {
    test('returns all projects', async () => {
        const data = await Project.getProjects()
        expect(data).toHaveLength(0)
    })
})

const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/dbConfig');

afterAll(async () => {
    await db.destroy()
  })
  beforeEach(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })

test('sanity', () => {
  expect(true).toBeTruthy()
})

describe('[get] /api/projects', () => {
    beforeEach(async () => {
        await db('projects').insert({project_name: 'project1', project_description: 'description1'})
    })
    test('return a status 200 OK', async () => {
        await db('projects').insert({project_name: 'name', project_description: "description"})
        const res = await request(server).get('/api/projects')
        expect(res.status).toBe(200)
    })
    test('projects have all props with correct defaults', async () => {
        const res = await request(server).get('/api/projects')
        expect(res.body[0]).toMatchObject({project_name: 'project1', project_completed: false})
    })
})

describe('[post] /api/projects', () => {
    test('return a new project', async () => {
        await request(server).post('/api/projects').send({project_name: 'project1', project_description: 'description1'})
        const newProject = await db('projects')
        expect(newProject[0]).toMatchObject({project_name: 'project1', project_description: 'description1'})
    })
    test('return a new project with project_completed boolean', async () => {
        const project1 = {project_name: 'project1', project_description: 'description1'}
        const res = await request(server).post('/api/projects').send(project1)
        expect(res.body).toMatchObject({...project1, project_completed: false})
    })
})

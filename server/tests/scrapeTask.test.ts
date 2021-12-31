const mongoose = require('mongoose');
const supertest = require('supertest');
const {MongoMemoryServer } = require ('mongodb-memory-server');
const app = require('../src/app');

describe('scrapeTask', () => {

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
    
        await mongoose.connect(mongoServer.getUri());
      });

    describe("Create scrapeTask", () => {
        describe("Given new product was created", () => {
            it("Should return Ok with created",async () => {
                var createTaskDto = {};
                var response = await supertest(app).post('/scrapeTask').send(createTaskDto);
                expect(response.status).toBe(201);
            })

            it("Should return an id",async () => {
                var createTaskDto = {};
                var response = await supertest(app).post('/scrapeTask').send(createTaskDto);
                expect(response.body.id).toBeDefined();
            });

            it('Get by id should return the object', async () => {
                var createTaskDto = {};
                var response = await supertest(app).post('/scrapeTask').send(createTaskDto);
                var id = response.body.id;
                var response = await supertest(app).get('/scrapeTask/' + id);
                expect(response.body).toBeDefined();
            });
        })
    })

    describe(
        "Get all scrapeTasks", () => {
            it("Should return an array", async () => {
                var createTaskDto = {};
                var response = await supertest(app).post('/scrapeTask').send(createTaskDto);

                response = await supertest(app).get('/scrapeTask');
                
                expect(response.body).toBeDefined();
                expect(response.body.length).toBeGreaterThan(0);
            });
        }
    )
})

export {};
const mongoose = require('mongoose');
const supertest = require('supertest');
const {MongoMemoryServer } = require ('mongodb-memory-server');
const app = require('../src/app');

describe('scrapeTask', () => {

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
    
        await mongoose.connect(mongoServer.getUri());
      });

    afterAll(
        ()=>{ mongoose.connection.close(true);}
    );

    describe("Create scrapeTask", () => {
        describe("Given new valid createProduct", () => {
            it("Should return Ok",async () => {
                await supertest(app).post('/api/scrapeTask')
            })
        })
    })
})
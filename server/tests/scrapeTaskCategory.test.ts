const {MongoMemoryServer } = require ('mongodb-memory-server');
const app = require('../src/app');
const mongoose = require('mongoose');
const supertest = require('supertest');

describe('scrapeTaskCategory', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
    
        await mongoose.connect(mongoServer.getUri());
      });

    describe("Create scrapeTaskCategory", () => {
        it("Should return an id",async () => {
            var createTaskDto = {};
            var response = await supertest(app).post('/scrapeCategory').send(createTaskDto);
            expect(response.body.id).toBeDefined();
        });
    });
})

export {};
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../src/app');

describe('scrapeTask', () => {

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
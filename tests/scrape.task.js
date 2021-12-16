const mongoose = require('mongoose');
const app = require('../app');

describe('scrapeTask', () => {

    describe("Create scrapeTask", () => {
        describe("Given new valid createProduct", () => {
            it("Should return Ok", () => {
                await supertest(app).post('/api/scrapeTask')
            })
        })
    })

})
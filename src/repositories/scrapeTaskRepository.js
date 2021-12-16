const ScrapeTask = require('../models/scrapeTask.model');

async function createScrapeTask(scrapeTask) {
    return await ScrapeTask.create(scrapeTask);
}

module.exports = {
    createScrapeTask
}
const ScrapeTask = require('../models/scrapeTask.model');

async function createScrapeTask(scrapeTask) {
    return await ScrapeTask.create(scrapeTask);
}

async function getScrapeTask(id) {
    return await ScrapeTask.findById(id);
}

module.exports = {
    createScrapeTask,
    getScrapeTask
}
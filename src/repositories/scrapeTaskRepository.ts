const ScrapeTask = require('../models/scrapeTask.model');

export async function createScrapeTask(scrapeTask: any) {
    return await ScrapeTask.create(scrapeTask);
}

export async function getScrapeTask(id: number) {
    return await ScrapeTask.findById(id);
}
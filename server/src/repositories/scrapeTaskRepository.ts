const ScrapeTask = require('../models/scrapeTask.model');

export async function createScrapeTask(scrapeTask: any) {
    return await ScrapeTask.create(scrapeTask);
}

export async function getAll (): Promise<IScrapeTask>{
    return await ScrapeTask.find();
}

export async function getScrapeTask(id: number) {
    return await ScrapeTask.findById(id);
}
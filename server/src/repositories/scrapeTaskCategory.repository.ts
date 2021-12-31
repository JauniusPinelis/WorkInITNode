const ScrapeTaskCategory = require('../models/scrapeTaskCategory.model');

export async function createScrapeTaskCategory (scrapeTaskCategory) {
    return await ScrapeTaskCategory.create(scrapeTaskCategory);
}

export async function getScrapeTaskCategories () {
    return await ScrapeTaskCategory.find();
}




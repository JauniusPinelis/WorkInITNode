const ScrapeTask = require('../models/scrapeTask.model');

const createScrapeTaskService = async (createTaskDto) => {
    try {
        var created = await ScrapeTask.create(createTaskDto); 
        return created;  
    }
    catch(err) {
        throw err;
    }
}

module.exports = {
    createScrapeTaskService
}
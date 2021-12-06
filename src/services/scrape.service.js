const ScrapeTask = require('../models/scrapeTask.model');

const createScrapeTask = async (createTaskDto) => {
    try {
        var created = await ScrapeTask.create(createTaskDto); 
        return created;  
    }
    catch(err) {
        throw err;
    }
}

module.exports = {
    createScrapeTask
}
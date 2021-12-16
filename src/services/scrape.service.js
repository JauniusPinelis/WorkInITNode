const {createScrapeTask} = require('../repositories/scrapeTaskRepository');

const createScrapeTaskService = async (createTaskDto) => {
    try {
        createTaskDto.status = 'pending';
        var created = await createScrapeTask(createTaskDto); 
        return created;  
    }
    catch(err) {
        throw err;
    }
}

module.exports = {
    createScrapeTaskService
}
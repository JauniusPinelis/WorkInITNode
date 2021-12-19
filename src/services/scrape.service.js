const {createScrapeTask, getScrapeTask} = require('../repositories/scrapeTaskRepository');

const getScrapeTaskService = async (id) => {
    try {
        var task = await getScrapeTask(id);
        return task;
    }
    catch(err){
        throw err;
    }
}

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
    createScrapeTaskService,
    getScrapeTaskService
}
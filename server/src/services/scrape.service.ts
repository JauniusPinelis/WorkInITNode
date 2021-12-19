import { createScrapeTask, getScrapeTask, getAll } from '../repositories/scrapeTaskRepository';

const getScrapeTaskService = async (id: number) => {
    try {
        var task = await getScrapeTask(id);
        return task;
    }
    catch(err){
        throw err;
    }
}

const createScrapeTaskService = async (createTaskDto: any) => {
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
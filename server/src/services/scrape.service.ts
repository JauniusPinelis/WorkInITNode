import { createScrapeTask, getScrapeTask, getAllScrapeTasks } from '../repositories/scrapeTaskRepository';

const getAllScrapeTasksService = async () => {
    try {
        var tasks = await getAllScrapeTasks();
        return tasks;
    }
    catch(err){
        throw err;
    }
}

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
    getScrapeTaskService,
    getAllScrapeTasksService
}
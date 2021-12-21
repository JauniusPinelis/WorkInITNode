import { createScrapeTask, getScrapeTask, getAllScrapeTasks } from '../repositories/scrapeTaskRepository';
import ScrapeTaskDto from '../dtos/scrapeTaskDto';

const getAllScrapeTasksService = async () => {
    try {
        var taskEntities = await getAllScrapeTasks();

        const tasks:ScrapeTaskDto[] = taskEntities.map(task => {
            return {
                id: task.id,
                status: task.status
            }
        });

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
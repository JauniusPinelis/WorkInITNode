import { createScrapeTask, getScrapeTask, getAllScrapeTasks } from '../repositories/scrapeTask.repository';
import ScrapeTaskDto from '../dtos/scrapeTaskDto';

const getAllScrapeTasksService = async () => {
    var taskEntities = await getAllScrapeTasks();
    const tasks:ScrapeTaskDto[] = taskEntities.map(task => {
        return {
            id: task.id,
            status: task.status
        }
    });

    return tasks;
   
}

const getScrapeTaskService = async (id: number) => {
    var task = await getScrapeTask(id);
    return task;
}

const createScrapeTaskService = async (createTaskDto: any) => {
    createTaskDto.status = 'pending';
    var created = await createScrapeTask(createTaskDto); 
    return created;  
}

module.exports = {
    createScrapeTaskService,
    getScrapeTaskService,
    getAllScrapeTasksService
}
const {createScrapeTaskService, getScrapeTaskService, getAllScrapeTasksService} = require('../services/scrape.service');
import {Request, Response} from 'express';

export async function createScrapeTaskHandler (req:any, res:any) {
    const created = await createScrapeTaskService(req.body);
    res.status(201).send({id: created._id});
}

export async function getScrapeTaskHandler (req:any, res:any) {
    const task = await getScrapeTaskService(req.params.id);
    res.status(200).send(task);
}

export async function getAllScrapeTasksHandler (req:Request, res:Response) {
    const tasks = await getAllScrapeTasksService();
    res.status(200).send(tasks);
}
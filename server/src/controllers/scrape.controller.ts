const {createScrapeTaskService, getScrapeTaskService, getAllScrapeTasksService} = require('../services/scrape.service');
import {Request, Response} from 'express';

export async function createScrapeTaskHandler (req:any, res:any) {
    try {
        const created = await createScrapeTaskService(req.body);
        res.status(201).send({id: created._id});
    }catch (err){
        res.status(500).send(err);
    }
}

export async function getScrapeTaskHandler (req:any, res:any) {
    try {
        const task = await getScrapeTaskService(req.params.id);
        res.status(200).send(task);
    }catch (err){
        res.status(500).send(err);
    }
}

export async function getAllScrapeTasksHandler (req:Request, res:Response) {
    try {
        const tasks = await getAllScrapeTasksService();
        res.status(200).send(tasks);
    }
    catch (err){
        res.status(500).send(err);
    }
}
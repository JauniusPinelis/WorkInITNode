import { HydratedDocument } from "mongoose";

const ScrapeTask = require('../models/scrapeTask.model');


export async function createScrapeTask(scrapeTask: any) {
    return await ScrapeTask.create(scrapeTask);
}

export async function getAllScrapeTasks(){
    return await ScrapeTask.find();
}

export async function getScrapeTask(id: number) {
    return await ScrapeTask.findById(id);
}
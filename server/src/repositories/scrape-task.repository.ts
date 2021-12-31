import { HydratedDocument } from "mongoose";
import IScrapeTask from "../models/interfaces/scrape-task.interface";

const ScrapeTask = require('../models/scrapeTask.model');


export async function createScrapeTask(scrapeTask: IScrapeTask) {
    return await ScrapeTask.create(scrapeTask);
}

export async function getAllScrapeTasks(){
    return await ScrapeTask.find();
}

export async function getScrapeTask(id: number) {
    return await ScrapeTask.findById(id);
}
import {Mongoose, Document, Schema, model, HydratedDocument} from 'mongoose';
import IScrapeTask from './interfaces/scrape-task.interface';

const scrapeTaskSchema = new Schema<IScrapeTask>({
    name: String,
    category: String,
    status: String,
    createdUtc: Date
});

const ScrapeTask = model('ScrapeTask', scrapeTaskSchema);

module.exports = ScrapeTask;
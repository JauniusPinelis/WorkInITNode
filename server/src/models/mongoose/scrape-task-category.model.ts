import {Mongoose, Document, Schema, model, HydratedDocument} from 'mongoose';
import IScrapeTask from './interfaces/scrape-task.interface';

const scrapeTaskCategorySchema = new Schema<IScrapeTaskCategory>({
    name: String
});

const ScrapeTaskCategory = model('ScrapeTaskType', scrapeTaskCategorySchema);

module.exports = ScrapeTaskCategory;
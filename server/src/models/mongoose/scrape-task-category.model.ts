import {Mongoose, Document, Schema, model, HydratedDocument} from 'mongoose';
import IScrapeTaskCategory from '../interfaces/scrape-task-category.interface';
import IScrapeTask from '../interfaces/scrape-task.interface';

const scrapeTaskCategorySchema = new Schema<IScrapeTaskCategory>({
    name: String
});

const ScrapeTaskCategoryModel = model('ScrapeTaskType', scrapeTaskCategorySchema);

module.exports = ScrapeTaskCategoryModel;
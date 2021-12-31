import {Mongoose, Document, Schema, model, HydratedDocument} from 'mongoose';


interface IScrapeTaskCategory {
    name: string;
}

const scrapeTaskCategorySchema = new Schema<IScrapeTaskCategory>({
    name: String
});

const ScrapeTaskCategory = model('ScrapeTaskType', scrapeTaskCategorySchema);

module.exports = ScrapeTaskCategory;
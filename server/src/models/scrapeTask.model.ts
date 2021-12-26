import {Mongoose, Document, Schema, model, HydratedDocument} from 'mongoose';

interface IScrapeTask {
    name: String;
    status: String;
    category: String;
    createdUtc: Date;
}

const scrapeTaskSchema = new Schema<IScrapeTask>({
    name: String,
    category: String,
    status: String,
    createdUtc: Date
});

const ScrapeTask = model('ScrapeTask', scrapeTaskSchema);

module.exports = ScrapeTask;
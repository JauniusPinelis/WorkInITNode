import {Mongoose, Document, Schema, model, HydratedDocument} from 'mongoose';

interface IScrapeTask {
    name: String;
    status: String;
}

const scrapeTaskSchema = new Schema<IScrapeTask>({
    name: String,
    status: String,
});

const ScrapeTask = model('ScrapeTask', scrapeTaskSchema);

module.exports = ScrapeTask;
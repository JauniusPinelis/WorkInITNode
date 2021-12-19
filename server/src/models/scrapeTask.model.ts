import {Mongoose, Document, Schema, Model} from 'mongoose';

interface IScrapeTask : Document {
    name: string;
    status: string;
}

const scrapeTaskSchema = new Schema<IScrapeTask>({
    name: String,
    status: String,
});

const ScrapeTask = new Model<IScrapeTask>('ScrapeTask', scrapeTaskSchema);

module.exports = ScrapeTask;
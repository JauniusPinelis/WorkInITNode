const mongoose = require('mongoose');

const scrapeTaskSchema = new mongoose.Schema({
    name: String
});

const ScrapeTask = mongoose.model('ScrapeTask', scrapeTaskSchema);

module.exports = ScrapeTask;
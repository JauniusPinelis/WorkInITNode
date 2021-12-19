const {createScrapeTaskService, getScrapeTaskService} = require('../services/scrape.service');

createScrapeTask = async (req, res) => {
    const created = await createScrapeTaskService(req.body);
    res.status(201).send({id: created._id});
}

getScrapeTask = async (req, res) => {
    const task = await getScrapeTaskService(req.params.id);
    res.status(200).send(task);
}

module.exports = {
    createScrapeTask,
    getScrapeTask
}
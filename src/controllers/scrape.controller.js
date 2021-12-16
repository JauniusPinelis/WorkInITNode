const {createScrapeTaskService} = require('../services/scrape.service');

createScrapeTask = async (req, res) => {
    const createdTask = await createScrapeTaskService(req.body);
    res.status(201).send({id: created._id});
}

module.exports = {
    createScrapeTask
}
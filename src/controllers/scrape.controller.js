const createScrapeTask = require('../services/scrape.service');

startScrape = async (req, res) => {
    const createdTask = await createScrapeTask(req.body);
    res.status(201).send({id: '123'});
}

module.exports = {
    startScrape
}
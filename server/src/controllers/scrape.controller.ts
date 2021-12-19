const {createScrapeTaskService, getScrapeTaskService} = require('../services/scrape.service');

export async function createScrapeTaskHandler (req:any, res:any) {
    const created = await createScrapeTaskService(req.body);
    res.status(201).send({id: created._id});
}

export async function getScrapeTaskHandler (req:any, res:any) {
    const task = await getScrapeTaskService(req.params.id);
    res.status(200).send(task);
}
import { createScrapeTaskHandler, getScrapeTaskHandler, getAllScrapeTasksHandler } from '../controllers/scrape.controller';

module.exports = function(app: any){
    app.post('/scrapeTask', createScrapeTaskHandler);
    app.get('/scrapeTask/:id', getScrapeTaskHandler);
    app.get('/scrapeTask', getAllScrapeTasksHandler);
}
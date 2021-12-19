import { createScrapeTaskHandler, getScrapeTaskHandler } from '../controllers/scrape.controller';

module.exports = function(app: any){
    app.post('/scrapeTask', createScrapeTaskHandler);
    app.get('/scrapeTask/:id', getScrapeTaskHandler);
}
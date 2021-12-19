const {createScrapeTask, getScrapeTask} = require('../controllers/scrape.controller');

module.exports = function(app){
    app.post('/scrapeTask', createScrapeTask);
    app.get('/scrapeTask/:id', getScrapeTask);
}
const {createScrapeTask} = require('../controllers/scrape.controller');

module.exports = function(app){
    app.post('/scrapeTask', createScrapeTask);
}
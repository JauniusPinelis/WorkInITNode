const app = require('../app');
const {scrape} = require('../controllers/scrape.controller');

module.exports = function(){
    app.post('/scrape', scrape);
}
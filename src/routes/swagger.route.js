const expressOasGenerator = require('express-oas-generator');

module.exports = function(app) {
    expressOasGenerator.init(app, {});
}
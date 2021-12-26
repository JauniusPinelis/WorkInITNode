import { Application } from "express";

const registerRoutes = (app: Application) => {
    require('./health.route')(app);
    require('./scrape.route')(app);
}

module.exports = registerRoutes;
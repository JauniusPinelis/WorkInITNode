import { Application } from "express";
import {healthCheckHandler} from '../controllers/health-check.controller';
module.exports = function(app: Application) {
    /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
    app.get("/healthcheck", healthCheckHandler);
}
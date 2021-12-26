import { Application } from "express";

module.exports = function(app: Application) {
    /**
     * @openapi 
     * /healthcheck:
     *  tags:
     *  - healthcheck
     *  get:
     *   description: Healthcheck
     *   responses:
     *      200:
     *        description: App is up and running
     * 
     */
    app.get("/healthcheck", (req: any, res: any) => {
        res.send("OK");
    });
}
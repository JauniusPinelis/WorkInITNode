
module.exports = function(app: any) {
    app.get("/healthcheck", (req: any, res: any) => {
        res.send("OK");
    });
}
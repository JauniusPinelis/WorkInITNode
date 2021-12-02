
module.exports = function(app) {
    app.get("/healthcheck", (req, res) => {
        res.send("OK");
    });
}
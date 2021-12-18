const app = require('./src/app');
const connect = require('./src/configs/database');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

    await connect();
});


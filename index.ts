const app = require("./src/app");
import connect from './src/configs/database';

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    await connect();
});


const mongoose = require('mongoose');

const mongo_uri = process.env.MONGO_URI;

async function connect () {
    try {
        await mongoose.connect(mongo_uri);
        console.log('connected to mongo');
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const mongoose = require('mongoose');

const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('connected to mongo');
});
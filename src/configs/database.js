const mongoose = require('mongoose');

const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri, () => {
    console.log('connected to mongo');
});
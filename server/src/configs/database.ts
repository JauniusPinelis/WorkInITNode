import { Mongoose } from "mongoose";

const mongoose:Mongoose = require('mongoose');

const mongo_uri = process.env.MONGO_URI || 'mongodb://localhost:27017/scrape-task';

const connectDatabase = async () =>{
    try {
        await mongoose.connect(mongo_uri);
        console.log('connected to mongo');
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDatabase;
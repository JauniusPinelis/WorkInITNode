import IUser from "../interfaces/user.interface";
import {Mongoose, Document, Schema, model, HydratedDocument} from 'mongoose';

const mongoose = require('mongoose');

const userSchema = new Schema<IUser>({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    token: {type: String}
})

const UserModel =  mongoose.model('User', userSchema);

export default UserModel;
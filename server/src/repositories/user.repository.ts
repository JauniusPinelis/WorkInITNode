import IUser from "../models/interfaces/user.interface";
import UserModel from '../models/mongoose/user.model';

const createUser = async (user: IUser) => {
    var newUser = new UserModel({user});

    await newUser.save();
}

const getUserById = async (id: string) => {
    return await UserModel.findById(id);
}

const getUserByEmail = async (email: string) => {
    return await UserModel.findOne({email});
}

module.exports = {
    createUser,
    getUserById,
    getUserByEmail
}


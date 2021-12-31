import ICreateUserDto from "../dtos/users/createUserDto";

const UserModel = require('../models/user.model');
const {getUserById,getUserByEmail, createUser} = require('../repositories/user.repository');
const bcryptjs = require('bcrypt');

const registerUserService = (user: ICreateUserDto) => {

    var oldUser = getUserByEmail(user.email);

    var newUser = new UserModel({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    })
}

const loginUserService = () => {

}
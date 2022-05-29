import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { User } from "./models/user.schema";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {

    constructor(private usersService: UsersService){

    }

    @Get()
    public async getUsers(): Promise<User[]> {
       return await this.usersService.getUsers();
    }

    @Post()
    public async CreateUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.createUser(createUserDto);
    }
}
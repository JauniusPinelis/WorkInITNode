import { CreateUserDto } from "./dtos/create-user.dto";
import { User } from "./models/user.schema";

export class UsersService {
    public async getUsers() : Promise<User[]> {
        throw new Error('Method not implemented');
    }

    public async createUser(createUserDto: CreateUserDto): Promise<User>{
        throw new Error('Method not implemented');
    }
}
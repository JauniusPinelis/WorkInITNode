import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    fullName: string;
    @IsEmail()
    email: string;
    password: string;   
}
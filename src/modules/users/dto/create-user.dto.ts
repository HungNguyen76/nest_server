import {Allow, IsEmail} from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @Allow()
    firstName: string;
    @Allow()
    lastName: string;
    @Allow()
    userName: string;
    @Allow()
    password: string;

}

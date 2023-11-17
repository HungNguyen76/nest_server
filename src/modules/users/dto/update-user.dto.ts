import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {Allow, IsBoolean, IsEmail, IsEnum} from "class-validator";
import {User} from "../entities/user.entity";
import {UserRole, UserStatus} from "../users.enum";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @Allow()
    avatar?: string;

    @IsEmail()
    email?: string;

    @IsBoolean()
    emailAuthentication?: boolean;

    @Allow()
    firstName?: string;

    @Allow()
    lastName?: string;

    @Allow()
    userName?: string;

    @Allow()
    password?: string;

    @IsEnum({ type: 'enum', enum: UserRole, default: UserRole.MEMBER})
    role?: UserRole;

    @IsEnum({ type: 'enum', enum: UserRole, default: UserStatus.ACTIVE})
    status?: UserStatus
}

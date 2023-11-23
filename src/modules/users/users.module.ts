

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import {MailService} from "../mails/mail.service";
import {JwtService} from "../jwts/jwt.service";


@Module({
imports: [
    TypeOrmModule.forFeature([User])
],
  controllers: [
    UsersController,
  ],
  providers: [UsersService, MailService, JwtService ],
})
export class UsersModule {
}

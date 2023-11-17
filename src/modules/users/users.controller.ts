import { Controller, Post, Body, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {Response} from 'express';
import {MailService, templates} from "../mails/mail.service";
import {JwtService} from "../jwts/jwt.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly mail: MailService, private readonly jwt: JwtService) {}


    @Post()
    async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
        try {
            let serRes = await this.usersService.register(createUserDto);

            if (serRes.status) {
                /* Mail */
                this.mail.sendMail({
                    subject: "Register Authentication Email",
                    to: serRes.data.email,
                    html: templates.emailConfirm({
                        confirmLink: `${process.env.HOST}:${process.env.PORT}/api/v1/users/email-authentication/${serRes.data.id}/${this.jwt.createToken(serRes.data, "300000")}`,
                        language: "vi",
                        productName: "Nike Store",
                        productWebUrl: "nikestore.com",
                        receiverName: `${serRes.data.firstName} ${serRes.data.lastName}`
                    })
                })
                ///console.log("check", check, serRes.data.email)
            }

            return res.status(serRes.status ? 200 : 213).json(serRes);
        } catch (err) {
            return res.status(500).json({
                message: "Server Controller Error!"
            });
        }
    }
}

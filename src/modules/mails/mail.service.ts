import {Injectable} from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import emailConfirm from "./templates/emailConfirm";
import sendOtp from "./templates/sendOtp";

interface MailOption {
    to: string, //Người nhận
    subject: string, //Chủ đề
    html?: string, //Template HTML
    text?: string, //Văn bản
}


export const templates = {
    emailConfirm,
    sendOtp
}
@Injectable()
export class MailService {
    async sendMail(mailOption: MailOption) {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MS_USER,
                    pass: process.env.MS_PW
                }
            })
            await transporter.sendMail({
                from: process.env.MS_USER,
                ...mailOption
            })
            return true
        } catch(err) {
            return false
        }
    }
}
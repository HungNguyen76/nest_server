import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {FindByIdSerRes, RegisterSerRes} from "./users.interface";
import validation from "../../utils/validation";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private users: Repository<User>){}

  async register(createUserDto: CreateUserDto): Promise<RegisterSerRes> {
    try {
      const newUser = await this.users.create(createUserDto);
      const result = await this.users.save(newUser)
      return {
        status: true,
        data: result,
        message: "Register OK"
      }
    } catch (err) {
      return {
        status: false,
        data: null,
        message: "Lỗi model"

      }

    }
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    try {
      const userSource = await this.users.findOne({
        where: {
          id: userId
        }
      })
      const userSourceUpdate = this.users.merge(userSource, updateUserDto)
      const result = await this.users.save(userSourceUpdate)
      return {
        status: true,
        data: result,
        message: "Update OK"
      }
    } catch (err) {
      return {
        status: false,
        data: null,
        message: "Lỗi model"
      }
    }
  }

  async findById(userId: string): Promise<FindByIdSerRes> {
    try {
      const result = await this.users.findOne({
        where: {
          id: userId
        }
      })
      if(!result) {
        throw new Error
      }
      return {
        status: true,
        data: result,
        message: "Find user by id ok!"
      }
    } catch (err) {
      return {
        status: false,
        data: null,
        message: "Lỗi model"
      }
    }
  }

  async findByEmailOrUserName(emailOrUserName: string): Promise<FindByIdSerRes> {
    try {
      let result = await this.users.findOne({
        where: validation.isEmail(emailOrUserName) ? { email: emailOrUserName, emailAuthentication: true} : { userName: emailOrUserName}
      })
      if(!result) {
        throw new Error
      }
      return {
        status: true,
        data: result,
        message: "Find user ok!"
      }
    } catch (err) {
      return {
        status: true,
        data: null,
        message: "Lỗi model"
      }
    }
  }

}

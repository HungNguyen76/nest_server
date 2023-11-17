import {User} from "./entities/user.entity";

export interface RegisterSerRes {
    data: null | User;
    message: string;
    status: boolean;
}

export interface FindByIdSerRes extends RegisterSerRes {}
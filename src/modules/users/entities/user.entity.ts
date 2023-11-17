import {BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import * as  bcrypt from 'bcrypt'
import {UserRole, UserStatus} from "../users.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({default: "https://png.pngtree.com/png-clipart/20210608/ourmid/pngtree-gray-silhouette-avatar-png-image_3418406.jpg"})
    avatar: string;

    @Column({ unique: true, length: 150})
    email: string;

    @Column({ default: false})
    emailAuthentication: boolean;

    @Column({
        unique: true,
        length: 20
    })
    userName: string;
    
    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @Column({type: 'enum', enum: UserRole, default: UserRole.MEMBER})
    role: UserRole;

    @Column({type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE})
    status: UserStatus;

    @Column({ default: String(Date.now())})
    createAt: string;

    @Column({ default: String(Date.now())})
    updateAt: string;

    @BeforeUpdate()
    async setUpdateTime() {
        this.updateAt = String(Date.now())
    }


}

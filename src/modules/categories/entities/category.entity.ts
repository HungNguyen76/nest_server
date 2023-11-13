import { Product } from "src/modules/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", {
        unique: true,
        length: 50
    })
    title: string;

    @Column({
        default: "https://static.thenounproject.com/png/547804-200.png"
    })
    avatar: string;
    
    @Column({
        default: false
    })
    status: boolean;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]
}

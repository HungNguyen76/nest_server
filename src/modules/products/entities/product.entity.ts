import { Category } from "src/modules/categories/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column({
        nullable: false
    })
    categoryId: string;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category
}

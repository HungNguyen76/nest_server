import { Category } from "src/modules/categories/entities/category.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductOption} from "../../product-options/entities/product-option.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    categoryId: string;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'categoryId'})
    category: Category;

    @Column()
    des: string;

    @OneToMany(() => ProductOption, (productOption) => productOption.product)
    options: ProductOption[];
}

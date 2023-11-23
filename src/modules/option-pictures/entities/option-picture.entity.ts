import {Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductOption} from "../../product-options/entities/product-option.entity";

export class OptionPicture {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    optionId: string;

    @ManyToOne(() => ProductOption, productOption => productOption.pictures)
    @JoinColumn({ name: 'optionId'})
    option: ProductOption;

    @Column()
    icon: string;
}

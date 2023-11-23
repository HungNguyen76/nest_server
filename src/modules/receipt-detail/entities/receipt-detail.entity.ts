import {Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductOption} from "../../product-options/entities/product-option.entity";

export class ReceiptDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    receiptId: string;

    @ManyToOne(() => ProductOption, option => option.sold)
    @JoinColumn({ name: 'optionId'})
    option: ProductOption

    @Column()
    quantity: number;
}

import {Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "../../products/entities/product.entity";
import {OptionPicture} from "../../option-pictures/entities/option-picture.entity";
import {ReceiptDetail} from "../../receipt-detail/entities/receipt-detail.entity";

export class ProductOption {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    productId: string;

    @ManyToOne(() => Product, (product) => product.options)
    @JoinColumn({ name: 'productId'})
    product: Product;

    @Column()
    price: number;

    @Column({ default: false})
    status: boolean;

    @Column()
    title: string;

    @OneToMany(() => OptionPicture, (optionPicture) => optionPicture.option)
    pictures: OptionPicture[];

    @OneToMany(() => ReceiptDetail, (detail) => detail.option)
    sold: ReceiptDetail[]
}

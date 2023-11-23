import {IsNotEmpty} from "class-validator";

export class CreateProductOptionDto {
    @IsNotEmpty()
    productId: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    title: string;
}

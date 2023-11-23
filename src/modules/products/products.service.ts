import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "./entities/product.entity";
import {Repository} from "typeorm";

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private readonly products: Repository<Product>) {}

    async create(createProductDto: CreateProductDto) {
        try {
            const newProduct = await this.products.save(createProductDto)
            if(!newProduct) {
                return [false, "lỗi", null]
            }
            const newProductDetail = await this.products.findOne({
                where: {
                    id: newProduct.id
                },
                relations: {
                    options: {
                        pictures: true
                    }
                }
            })
            if(!newProductDetail){
                return [false, "lỗi", null]
            }
            return [true, "Create ok", newProductDetail]
        } catch (err) {
            return [false, "lỗi model", null]
        }
    }
    async find() {
        try {
            let productList = await this.products.find({
                relations: {
                    options: {
                        pictures: true
                    }
                }
            });
            if(!productList) {
                return [false, "lỗi", null]
            }
            return [true, "Get products ok", productList]
        }catch(err) {
            return [false, "lỗi model", null]
        }
    }
}

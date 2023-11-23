import { Injectable } from '@nestjs/common';
import { CreateProductOptionDto } from './dto/create-product-option.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {ProductOption} from "./entities/product-option.entity";
import {Repository} from "typeorm";

@Injectable()
export class ProductOptionsService {
  constructor(@InjectRepository(ProductOption) private readonly options: Repository<ProductOption>){}

  async create(createProductOptionDto: CreateProductOptionDto) {
    try{
      let newOption = await this.options.save(createProductOptionDto);
      if(!newOption) return [false, "Lỗi", null]
      let newOptionDetail = await this.options.findOne({
        where: {
          id: newOption.id
        },
        relations: {
          pictures: true
        }
      })
      if(!newOptionDetail) return [false, "Lỗi", null]
      return [true, "Create Ok!", newOptionDetail]
    }catch(err) {
      return [false, "Lỗi model", null]
    }
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Res() res: Response) {
    try {
      const [status, message, data] = await this.productsService.create(createProductDto)
      // @ts-ignore
      return res.status(status ? 200: 213).json({
        message,
        data
      })
    } catch (err) {
      // @ts-ignore
      return res.status(500).json({
        message: "Controller error!"
      })
    }
  }
  @Get()
  async find(@Res() res: Response) {
    try {
      let [status, message, data] = await this.productsService.find();
      // @ts-ignore
      return res.status(status ? 200 : 213).json({
        message,
        data
      })
    }catch(err) {
      // @ts-ignore
      return res.status(500).json({
        message: "Controller error!"
      })
    }
  }

}

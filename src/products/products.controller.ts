import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): string {
    return this.productsService.insertProduct(title, description, price);
  }

  @Get()
  getAllProducts() {
    return this.productsService.listAllProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return this.productsService.listOneProduct(id);
  }
}

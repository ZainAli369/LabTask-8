import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Product, ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Product {
    const product = this.productsService.getById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post()
  addProduct(@Body() product: Omit<Product, 'id'> & { id?: string }): Product {
    return this.productsService.add(product);
  }
}

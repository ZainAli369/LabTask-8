import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartItem, CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getItems(): CartItem[] {
    return this.cartService.getAll();
  }

  @Post()
  addItem(@Body() item: Omit<CartItem, 'id'>): CartItem {
    return this.cartService.add(item);
  }
}

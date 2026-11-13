import { Body, Controller, Get, Post } from '@nestjs/common';
import { Order, OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders(): Order[] {
    return this.ordersService.getAll();
  }

  @Post()
  createOrder(@Body() order: Omit<Order, 'id'>): Order {
    return this.ordersService.add(order);
  }
}

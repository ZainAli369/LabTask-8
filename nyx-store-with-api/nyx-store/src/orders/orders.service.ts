import { Injectable } from '@nestjs/common';

export interface Order {
  id: number;
  [key: string]: unknown;
}

@Injectable()
export class OrdersService {
  private readonly orders: Order[] = [];

  getAll(): Order[] {
    return this.orders;
  }

  add(order: Omit<Order, 'id'>): Order {
    const newOrder = { ...order, id: this.orders.length + 1 };
    this.orders.push(newOrder);
    return newOrder;
  }
}

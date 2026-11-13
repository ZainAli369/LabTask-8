import { Injectable } from '@nestjs/common';

export interface CartItem {
  id: number;
  productId: string;
  size: string;
  quantity: number;
}

@Injectable()
export class CartService {
  private readonly items: CartItem[] = [];

  getAll(): CartItem[] {
    return this.items;
  }

  add(item: Omit<CartItem, 'id'>): CartItem {
    const newItem = { ...item, id: this.items.length + 1 };
    this.items.push(newItem);
    return newItem;
  }
}

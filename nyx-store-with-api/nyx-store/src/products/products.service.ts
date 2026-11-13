import { Injectable } from '@nestjs/common';
import storeData from '../../data/store.json';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  sizes: string[];
  stock: number;
}

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [...storeData.products];
  private nextId = 1;

  getAll(): Product[] {
    return this.products;
  }

  getById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  add(product: Omit<Product, 'id'> & { id?: string }): Product {
    const newProduct: Product = {
      ...product,
      id: product.id ?? `product-${this.nextId++}`,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}

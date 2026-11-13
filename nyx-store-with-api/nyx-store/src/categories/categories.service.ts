import { Injectable } from '@nestjs/common';
import storeData from '../../data/store.json';

export interface Category {
  id: string;
  name: string;
}

const categoryNames = [...new Set(storeData.products.map((product) => product.category))];

@Injectable()
export class CategoriesService {
  private readonly categories: Category[] = categoryNames.map((name) => ({
    id: name,
    name: name.charAt(0).toUpperCase() + name.slice(1),
  }));

  getAll(): Category[] {
    return this.categories;
  }

  add(name: string): Category {
    const category = { id: name.toLowerCase().replace(/\s+/g, '-'), name };
    this.categories.push(category);
    return category;
  }
}

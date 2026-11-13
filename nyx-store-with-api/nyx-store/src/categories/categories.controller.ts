import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService, Category } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAllCategories(): Category[] {
    return this.categoriesService.getAll();
  }

  @Post()
  addCategory(@Body() category: { name: string }): Category {
    return this.categoriesService.add(category.name);
  }
}

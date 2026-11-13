import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, CategoriesModule, CartModule, OrdersModule],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(process.cwd(), 'nyx-store'), { index: false });
  await app.listen(3000);
  console.log('NYX Store API is running at http://localhost:3000');
}

void bootstrap();

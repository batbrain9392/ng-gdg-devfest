import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(ApplicationModule,
    new FastifyAdapter());
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 4200, '0.0.0.0');
}
bootstrap();

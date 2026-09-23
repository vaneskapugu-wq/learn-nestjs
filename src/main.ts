import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
=======
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
>>>>>>> upstream/main
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();

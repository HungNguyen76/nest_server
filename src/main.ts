import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  
  /* Version API */
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1"
  });
  
  /* Validator */
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true
    }
  ));
  
  await app.listen(process.env.PORT);
}
bootstrap();

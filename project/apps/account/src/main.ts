import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

const SPEC_PATH = 'spec';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('The «Account» service')
    .setDescription('Account service API')
    .setVersion('1.0')
    .build();

  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SPEC_PATH, app, document);
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  const configService = app.get(ConfigService);
  const port = configService.get('application.port');
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log(`API specification is running on: http://localhost:${port}/${SPEC_PATH}`);
}

bootstrap();

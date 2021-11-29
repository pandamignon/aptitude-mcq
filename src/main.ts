import { NestFactory } from '@nestjs/core';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import getLogLevels from './utils/getLogLevels';

import { ValidationException } from './filters/validation.exception';
import { ValidationFilter } from './filters/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: getLogLevels(process.env["NODE_ENV"] === 'production')
  });
  // validation Filter
  app.useGlobalFilters(
    new ValidationFilter()
  )
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: false,
    exceptionFactory: (errors: ValidationError[]) => {
      const messages = errors.map((error) => {
        return {
          error: `${error.property} has wrong value ${error.value}.`,
          message: Object.keys(error.constraints).map(key => error.constraints[key])
          //Object.values(error.constraints).join(''),
        }
      })
      return new ValidationException(messages);
    }
  }));
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

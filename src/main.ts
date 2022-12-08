import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization', 'X-Requested-With'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
      validationError: {
        target: false,
      },
    }),
  );

  const port = config.PORT;

  // catch exception
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(port, () => {
    console.log(`Server is running`);
    console.table({
      Port: port,
    });
  });
}
bootstrap();

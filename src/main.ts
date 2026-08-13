import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { ZodValidationPipe } from './common/pipes/zod-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // Security headers
  app.use(helmet());

  // CORS configuration
  const origins =
    configService
      .get<string>('FRONTEND_ORIGINS')
      ?.split(',')
      .map((o) => o.trim()) ?? [];
  app.enableCors({
    origin: origins.length > 0 ? origins : undefined,
    credentials: true,
  });

  // Global validation (Zod-based DTOs)
  app.useGlobalPipes(new ZodValidationPipe());

  // Swagger setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Health Axis API')
    .setDescription('Unified backend API for Health Axis platform')
    .setVersion('1.0.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      name: 'Authorization',
    })
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
}

bootstrap();

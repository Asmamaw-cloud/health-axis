import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { ZodValidationPipe } from './common/pipes/zod-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // Global API prefix (use API_PREFIX env var or default to 'api')
  const apiPrefix = configService.get<string>('API_PREFIX') ?? 'api';
  app.setGlobalPrefix(apiPrefix);

  // Normalize incoming request body keys: snake_case -> camelCase
  const toCamel = (s: string) =>
    s.replace(/[_-][a-z]/g, (m) => m.charAt(1).toUpperCase());

  function normalizeKeys(obj: any): any {
    if (Array.isArray(obj)) return obj.map(normalizeKeys);
    if (obj && typeof obj === 'object') {
      const out: any = {};
      for (const key of Object.keys(obj)) {
        const camel = toCamel(key);
        out[camel] = normalizeKeys(obj[key]);
      }
      return out;
    }
    return obj;
  }

  app.use((req, _res, next) => {
    try {
      if (req.headers && req.headers['content-type']?.includes('application/json')) {
        if (req.body && typeof req.body === 'object') {
          req.body = normalizeKeys(req.body);
        }
      }
    } catch (e) {
      // noop - don't block requests for normalization failures
    }
    next();
  });

  // Security headers
  app.use(helmet());

  // CORS configuration
  const origins =
    configService
      .get<string>('FRONTEND_ORIGINS')
      ?.split(',')
      .map((o) => o.trim()) ?? [];

  // Use a function so we explicitly echo the request origin when allowed.
  app.enableCors({
    origin: (requestOrigin, callback) => {
      // Allow non-browser (e.g., server-side) requests when no origin is provided
      if (!requestOrigin) return callback(null, true);

      if (origins.length === 0) {
        // If no origins configured, allow any origin
        return callback(null, true);
      }

      if (origins.includes(requestOrigin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
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

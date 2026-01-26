import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { CustomLoggerService } from './modules/logger/logger.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // 创建应用实例，使用自定义日志服务
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // 自动移除 DTO 中未声明的字段
      forbidNonWhitelisted: true, // 传多字段直接报错
      transform: true,            // 自动类型转换（id string → number）
    }),
  );

  // 获取配置服务
  const configService = app.get(ConfigService);
  const logger = app.get(CustomLoggerService);
  logger.setContext('Bootstrap');

  // 使用自定义日志服务
  app.useLogger(logger);

  // 启用 CORS
  const corsOrigins = configService.get<string[]>('app.corsOrigins') || [];
  app.enableCors({
    origin: corsOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // 设置全局路由前缀
  app.setGlobalPrefix('nest');

  // 获取端口配置
  const port = 3210;
  const appName = configService.get<string>('app.name') || 'approaching-ai-backend';
  const env = configService.get<string>('app.env') || 'development';

  // 启动服务
  await app.listen(port);

  logger.log(`🚀 ${appName} is running on: http://localhost:${port}/nest`);
  logger.log(`📦 Environment: ${env}`);
  logger.log(`🌐 CORS enabled for: ${corsOrigins.join(', ')}`);
}

bootstrap().catch((err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});

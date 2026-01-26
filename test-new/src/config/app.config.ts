import { registerAs } from '@nestjs/config';

/**
 * 应用配置
 */
export default registerAs('app', () => ({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3210', 10),
  name: process.env.APP_NAME || 'approaching-ai-backend',
  corsOrigins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3210'],
  requestTimeout: parseInt(process.env.REQUEST_TIMEOUT || '30000', 10),
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}));

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomLoggerService } from '../../modules/logger/logger.service';

/**
 * 请求日志中间件
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setContext('RequestLogger');
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || '';
    const startTime = Date.now();

    // 记录请求开始
    this.logger.log(`🚀 ${method} ${originalUrl} - ${ip} - ${userAgent}`);

    // 监听响应结束
    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;

      // 根据状态码选择日志级别
      const logMessage = `✅ ${method} ${originalUrl} - ${statusCode} - ${responseTime}ms`;

      if (statusCode >= 500) {
        this.logger.error(logMessage);
      } else if (statusCode >= 400) {
        this.logger.warn(logMessage);
      } else {
        this.logger.log(logMessage);
      }
    });

    next();
  }
}

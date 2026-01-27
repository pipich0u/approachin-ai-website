import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request, Response } from 'express';
import { CustomLoggerService } from '../../modules/logger/logger.service';

/**
 * 日志拦截器
 * 记录请求和响应信息
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setContext('HTTP');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request & { body?: unknown }>();
    const response = ctx.getResponse<Response>();
    const method = request.method;
    const originalUrl = request.originalUrl;
    const ip = request.ip;
    const body: unknown = request.body;
    const query = request.query;
    const params = request.params;

    const startTime = Date.now();

    // 记录请求信息
    this.logger.log(
      `➡️  ${method} ${originalUrl} - IP: ${ip} - Params: ${JSON.stringify(params)} - Query: ${JSON.stringify(query)} - Body: ${JSON.stringify(body)}`,
    );

    return next.handle().pipe(
      tap({
        next: () => {
          const responseTime = Date.now() - startTime;
          const { statusCode } = response;

          // 记录成功响应
          this.logger.log(
            `⬅️  ${method} ${originalUrl} - ${statusCode} - ${responseTime}ms`,
          );
        },
        error: (error: Error & { status?: number }) => {
          const responseTime = Date.now() - startTime;
          const statusCode = error.status || 500;

          // 记录错误响应
          this.logger.error(
            `⬅️  ${method} ${originalUrl} - ${statusCode} - ${responseTime}ms - Error: ${error.message}`,
          );
        },
      }),
    );
  }
}

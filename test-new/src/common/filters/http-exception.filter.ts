import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomLoggerService } from '../../modules/logger/logger.service';
import { ResponseDto } from '../dto/response.dto';
import { BUSINESS_CODE } from '../constants/http-status.constant';

/**
 * 全局HTTP异常过滤器
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setContext('HttpExceptionFilter');
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // 获取HTTP状态码
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // 获取错误信息
    let message = '服务器内部错误';
    let code: number = BUSINESS_CODE.INTERNAL_ERROR;
    let errors: unknown = null;

    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        // 处理业务异常
        if ('code' in exceptionResponse && typeof exceptionResponse.code === 'number') {
          code = exceptionResponse.code;
          message = ('message' in exceptionResponse && typeof exceptionResponse.message === 'string')
            ? exceptionResponse.message
            : message;
        }
        // 处理验证异常
        else if ('message' in exceptionResponse) {
          const msgValue = exceptionResponse.message;
          if (Array.isArray(msgValue)) {
            message = msgValue.join(', ');
            errors = msgValue;
          } else if (typeof msgValue === 'string') {
            message = msgValue;
            errors = msgValue;
          }
          code = BUSINESS_CODE.VALIDATION_ERROR as number;
        }
      } else if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    // 构建错误响应
    const errorResponse = new ResponseDto(
      code,
      message,
      errors || undefined,
      request.url,
    );

    // 记录错误日志
    const stack = exception instanceof Error ? exception.stack : undefined;
    this.logger.error(
      `${request.method} ${request.url} - ${httpStatus} - ${message}`,
      stack,
    );

    // 发送响应
    response.status(httpStatus).json(errorResponse);
  }
}

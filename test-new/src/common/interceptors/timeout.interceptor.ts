import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

/**
 * 超时拦截器
 * 为请求添加超时限制
 */
@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  private readonly timeout: number;

  constructor(timeoutMs: number = 30000) {
    this.timeout = timeoutMs;
  }

  intercept(_context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      timeout(this.timeout),
      catchError((err: unknown) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException('请求超时'));
        }
        return throwError(() => err);
      }),
    );
  }
}

import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';

/**
 * 日志级别
 */
export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  VERBOSE = 'verbose',
}

/**
 * 日志颜色
 */
const LOG_COLORS = {
  [LogLevel.ERROR]: '\x1b[31m', // 红色
  [LogLevel.WARN]: '\x1b[33m', // 黄色
  [LogLevel.INFO]: '\x1b[32m', // 绿色
  [LogLevel.DEBUG]: '\x1b[36m', // 青色
  [LogLevel.VERBOSE]: '\x1b[35m', // 紫色
};

const RESET_COLOR = '\x1b[0m';

/**
 * 自定义日志服务
 */
@Injectable()
export class CustomLoggerService implements NestLoggerService {
  private context?: string;
  private static logLevels: LogLevel[] = [
    LogLevel.ERROR,
    LogLevel.WARN,
    LogLevel.INFO,
    LogLevel.DEBUG,
    LogLevel.VERBOSE,
  ];

  constructor() {
    this.context = undefined;
  }

  setContext(context: string) {
    this.context = context;
  }

  /**
   * 格式化日志消息
   */
  private formatMessage(level: LogLevel, message: any, context?: string): string {
    const timestamp = new Date().toISOString();
    const ctx = context || this.context || 'Application';
    const color = LOG_COLORS[level];
    const levelStr = level.toUpperCase().padEnd(7);

    return `${color}[${timestamp}] [${levelStr}] [${ctx}]${RESET_COLOR} ${this.stringifyMessage(message)}`;
  }

  /**
   * 将消息转为字符串
   */
  private stringifyMessage(message: any): string {
    if (typeof message === 'string') {
      return message;
    }
    if (message instanceof Error) {
      return `${message.message}\n${message.stack}`;
    }
    return JSON.stringify(message, null, 2);
  }

  /**
   * 检查是否应该输出该级别的日志
   */
  private shouldLog(level: LogLevel): boolean {
    const enabledLevels = process.env.LOG_LEVEL?.split(',') || ['error', 'warn', 'info'];
    return enabledLevels.includes(level);
  }

  /**
   * 错误日志
   */
  error(message: any, trace?: string, context?: string): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error(this.formatMessage(LogLevel.ERROR, message, context));
      if (trace) {
        console.error(trace);
      }
    }
  }

  /**
   * 警告日志
   */
  warn(message: any, context?: string): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage(LogLevel.WARN, message, context));
    }
  }

  /**
   * 普通日志
   */
  log(message: any, context?: string): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.log(this.formatMessage(LogLevel.INFO, message, context));
    }
  }

  /**
   * 调试日志
   */
  debug(message: any, context?: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.debug(this.formatMessage(LogLevel.DEBUG, message, context));
    }
  }

  /**
   * 详细日志
   */
  verbose(message: any, context?: string): void {
    if (this.shouldLog(LogLevel.VERBOSE)) {
      console.log(this.formatMessage(LogLevel.VERBOSE, message, context));
    }
  }

  /**
   * HTTP请求日志
   */
  logRequest(req: { method: string; originalUrl: string; ip: string; get: (header: string) => string | undefined }, res: { statusCode: number }, responseTime: number): void {
    const { method, originalUrl, ip } = req;
    const { statusCode } = res;
    const userAgent = req.get('user-agent') || '';

    const message = `${method} ${originalUrl} ${statusCode} ${responseTime}ms - ${ip} ${userAgent}`;

    if (statusCode >= 500) {
      this.error(message, '', 'HTTP');
    } else if (statusCode >= 400) {
      this.warn(message, 'HTTP');
    } else {
      this.log(message, 'HTTP');
    }
  }
}

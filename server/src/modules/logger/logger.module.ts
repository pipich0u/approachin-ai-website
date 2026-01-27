import { Module, Global } from '@nestjs/common';
import { CustomLoggerService } from './logger.service';

/**
 * 全局日志模块
 */
@Global()
@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {}

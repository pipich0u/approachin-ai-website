import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// 配置
import appConfig from './config/app.config';

// 模块
import { LoggerModule } from './modules/logger/logger.module';

// 中间件
import { LoggerMiddleware } from './common/middleware/logger.middleware';

// 过滤器
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

// 拦截器
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';

// 管道
import { ValidationPipe } from './common/pipes/validation.pipe';

// 日志服务
import { CustomLoggerService } from './modules/logger/logger.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoModule } from './info/info.module';
import { FeishuBotService } from './feishu-bot/feishu-bot.service';
import { FeishuBotModule } from './feishu-bot/feishu-bot.module';

@Module({
  imports: [
    // 配置模块
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env','.env.example' ],
    }),

    // 日志模块
    LoggerModule,
    FeishuBotModule,

    // 业务模块
    InfoModule,

    // 数据库模块
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'contact_dev',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CustomLoggerService,

    // 全局异常过滤器
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },

    // 全局拦截器（按顺序执行）
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useFactory: () => new TimeoutInterceptor(30000),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },

    // 全局验证管道
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },

    FeishuBotService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 应用全局中间件
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

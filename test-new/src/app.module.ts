import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CatModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',           // 数据库类型
    //   host: 'localhost',       // 服务器地址
    //   port: 3943,              // 端口
    //   username: '',        // 用户名
    //   password: '', // 密码
    //   database: '',     // 数据库名
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],  // 实体路径
    //   synchronize: true,       // 开发环境自动同步（生产环境关闭）
    //   logging: true,           // 打印 SQL 日志
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Global, Module } from '@nestjs/common';
import { FeishuBotService } from './feishu-bot.service';
import { ConfigModule } from '@nestjs/config';

@Global() // 全局模块，所有模块可直接注入，无需重复导入
@Module({
  imports: [ConfigModule], // 注入配置服务，读取环境变量
  providers: [FeishuBotService],
  exports: [FeishuBotService], // 导出服务，供全局使用
})
export class FeishuBotModule {}
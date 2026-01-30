import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Info } from './entities/info.entity';
import { FeishuBotService } from '../feishu-bot/feishu-bot.service';
@Module({
  imports: [TypeOrmModule.forFeature([Info])],
  controllers: [InfoController],
  providers: [InfoService,FeishuBotService],
})
export class InfoModule { }

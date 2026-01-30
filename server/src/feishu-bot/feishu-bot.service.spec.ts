import { Test, TestingModule } from '@nestjs/testing';
import { FeishuBotService } from './feishu-bot.service';

describe('FeishuBotService', () => {
  let service: FeishuBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeishuBotService],
    }).compile();

    service = module.get<FeishuBotService>(FeishuBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

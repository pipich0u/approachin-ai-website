import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
// import * as crypto from 'crypto';

@Injectable()
export class FeishuBotService {
    private readonly webhookUrl: string;

    constructor(private readonly configService: ConfigService) {
        const url = this.configService.get<string>('FEISHU_BOT_WEBHOOK');
        if (!url) {
            throw new Error('未配置 FEISHU_BOT_WEBHOOK');
        }
        this.webhookUrl = url;
    }

    async sendTextMessage(content: string): Promise<void> {
        await axios.post(this.webhookUrl, {
            msg_type: 'text',
            content: {
                text: content,
            },
        });
    }
}

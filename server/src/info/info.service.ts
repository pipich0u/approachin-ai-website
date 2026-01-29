import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Info } from './entities/info.entity';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { PageResult } from 'src/common/vo/pageResult';
import { FeishuBotService } from '../feishu-bot/feishu-bot.service';
@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info)
    private readonly infoRepository: Repository<Info>,
    private readonly feishuBotService: FeishuBotService,
  ) { }

  // 创建（表单提交）
  async create(createInfoDto: CreateInfoDto) {
    const info = this.infoRepository.create({
      ...createInfoDto,
    });

    await this.infoRepository.save(info);
    await this.feishuBotService.sendTextMessage(
      `【📩 新表单提交】

👤 姓名：${info.name}
📞 电话：${info.phone}
📧 邮箱：${info.email}
🏢 公司：${info.company ?? '无'}
📝 内容：
${info.description ?? '无'}`
    );
  }

  // 查询全部
  async findAll(): Promise<Info[]> {
    return this.infoRepository.find({
      order: {
        createTime: 'DESC',
      },
      // skip: 0,
      // take: 100,
    });
  }

  // 查询单条
  async findOne(id: number): Promise<Info> {
    const info = await this.infoRepository.findOne({
      where: { id },
    });

    if (!info) {
      throw new NotFoundException(`Info with id ${id} not found`);
    }

    return info;
  }

  // 分页查询
  async findPage(page: number, pageSize: number,) {
    const [infos, total] = await this.infoRepository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      // order: {
    })
    return new PageResult(infos, total, page, pageSize);
  }
  // 更新
  async update(id: number, updateInfoDto: UpdateInfoDto): Promise<Info> {
    const info = await this.findOne(id);

    const updated = Object.assign(info, updateInfoDto);

    return this.infoRepository.save(updated);
  }

  // 删除
  async remove(id: number): Promise<void> {
    const result = await this.infoRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Info with id ${id} not found`);
    }
  }

  //批量删除
  async removeMultiple(ids: number[]) {
    return this.infoRepository.delete({
      id: In(ids),
    });
  }

}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Info } from './entities/info.entity';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info)
    private readonly infoRepository: Repository<Info>,
  ) {}

  // 创建（表单提交）
  async create(createInfoDto: CreateInfoDto) {
    const info = this.infoRepository.create({
      ...createInfoDto,
    });

    await this.infoRepository.save(info);
  }

  // 查询全部
  async findAll(): Promise<Info[]> {
    return this.infoRepository.find({
      order: {
        createTime: 'DESC',
      },
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

  
}

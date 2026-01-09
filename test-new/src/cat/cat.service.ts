import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { PaginationDto, PaginatedResponseDto } from '../common/dto/pagination.dto';
import { BusinessException } from '../common/exceptions/business.exception';
import { CustomLoggerService } from '../modules/logger/logger.service';

export interface Cat {
  id: number;
  name: string;
  age: number;
  breed?: string;
  color?: string;
  createdAt: Date;
}

@Injectable()
export class CatService {
  private cats: Cat[] = [
    { id: 1, name: '小花', age: 2, breed: '英短', color: '蓝色', createdAt: new Date() },
    { id: 2, name: '小白', age: 3, breed: '美短', color: '白色', createdAt: new Date() },
    { id: 3, name: '小黑', age: 1, breed: '田园猫', color: '黑色', createdAt: new Date() },
  ];
  private nextId = 4;

  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setContext('CatService');
  }

  /**
   * 创建猫咪
   */
  create(createCatDto: CreateCatDto): Cat {
    const cat: Cat = {
      id: this.nextId++,
      ...createCatDto,
      createdAt: new Date(),
    };

    this.cats.push(cat);
    this.logger.log(`Created cat: ${cat.name}`);

    return cat;
  }

  /**
   * 获取所有猫咪（分页）
   */
  findAll(pagination: PaginationDto): PaginatedResponseDto<Cat> {
    const page = pagination.page || 1;
    const limit = pagination.limit || 10;
    const skip = pagination.skip;

    // 模拟分页查询
    const items = this.cats.slice(skip, skip + limit);
    const total = this.cats.length;

    this.logger.log(`Find all cats: page=${page}, limit=${limit}, total=${total}`);

    return new PaginatedResponseDto(items, total, page, limit);
  }

  /**
   * 根据ID获取猫咪
   */
  findOne(id: number): Cat {
    const cat = this.cats.find((c) => c.id === id);

    if (!cat) {
      throw BusinessException.notFound(`ID为 ${id} 的猫咪不存在`);
    }

    this.logger.log(`Find cat: ${cat.name}`);
    return cat;
  }

  /**
   * 更新猫咪信息
   */
  update(id: number, updateCatDto: UpdateCatDto): Cat {
    const cat = this.findOne(id);

    Object.assign(cat, updateCatDto);
    this.logger.log(`Updated cat: ${cat.name}`);

    return cat;
  }

  /**
   * 删除猫咪
   */
  remove(id: number): { message: string } {
    const index = this.cats.findIndex((c) => c.id === id);

    if (index === -1) {
      throw BusinessException.notFound(`ID为 ${id} 的猫咪不存在`);
    }

    const cat = this.cats[index];
    this.cats.splice(index, 1);

    this.logger.log(`Removed cat: ${cat.name}`);

    return { message: `成功删除猫咪: ${cat.name}` };
  }
}

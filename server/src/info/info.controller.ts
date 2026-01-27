import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { Info } from './entities/info.entity';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) { }

  // 提交表单
  @Post()
  async create(
    @Body() createInfoDto: CreateInfoDto,
  ): Promise<{ success: true }> {
    await this.infoService.create(createInfoDto);
    return { success: true };
  }

  // 查询全部
  @Get()
  findAll(): Promise<Info[]> {
    return this.infoService.findAll();
  }

  // 分页查询
  @Get('page')
  findPage(
    @Query('page', ParseIntPipe) page: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
  ) {
    return this.infoService.findPage(page, pageSize);
  }

  // 查询单条
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.infoService.findOne(id);
  }


  // 更新
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInfoDto: UpdateInfoDto,
  ) {
    return this.infoService.update(id, updateInfoDto);
  }

  // 删除
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.infoService.remove(id);
  }

  // 批量删除
  @Post('remove')
  removeMultiple(
    @Body('ids') ids: number[],
  ) {
    if (!ids || ids.length === 0) {
      throw new BadRequestException('ids 不能为空');
    }
    return this.infoService.removeMultiple(ids);
  }
}


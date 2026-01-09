import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

// 以下是认证和授权的示例代码（已注释）
// import { UseGuards } from '@nestjs/common';
// import { Public } from '../common/decorators/public.decorator';
// import { Roles } from '../common/decorators/roles.decorator';
// import { AuthGuard } from '../common/guards/auth.guard';
// import { RolesGuard } from '../common/guards/roles.guard';

/**
 * 猫咪控制器
 *
 * 当前所有接口都是公开的，不需要认证
 *
 * 如果需要启用认证和授权，可以使用以下方式：
 *
 * 1. 在控制器级别启用守卫：
 *    @Controller('cat')
 *    @UseGuards(AuthGuard, RolesGuard)
 *
 * 2. 使用 @Public() 装饰器标记公开接口（不需要认证）
 * 3. 使用 @Roles('admin') 装饰器限制特定角色
 */
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  /**
   * 创建猫咪
   * 参数会自动验证
   *
   * 如需要认证：@UseGuards(AuthGuard, RolesGuard) + @Roles('admin')
   */
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  /**
   * 获取所有猫咪（分页）
   */
  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.catService.findAll(pagination);
  }

  /**
   * 根据ID获取猫咪
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  /**
   * 更新猫咪信息
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  /**
   * 删除猫咪
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}

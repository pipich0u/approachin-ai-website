import { IsInt, IsOptional, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * 分页查询DTO
 */
export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '页码必须是整数' })
  @Min(1, { message: '页码最小为1' })
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '每页数量必须是整数' })
  @Min(1, { message: '每页数量最小为1' })
  @Max(100, { message: '每页数量最大为100' })
  limit?: number = 10;

  /**
   * 计算跳过的数量
   */
  get skip(): number {
    return ((this.page || 1) - 1) * (this.limit || 10);
  }
}

/**
 * 分页响应数据
 */
export class PaginatedResponseDto<T> {
  /**
   * 数据列表
   */
  items: T[];

  /**
   * 总数
   */
  total: number;

  /**
   * 当前页
   */
  page: number;

  /**
   * 每页数量
   */
  limit: number;

  /**
   * 总页数
   */
  totalPages: number;

  /**
   * 是否有下一页
   */
  hasNext: boolean;

  /**
   * 是否有上一页
   */
  hasPrev: boolean;

  constructor(items: T[], total: number, page: number, limit: number) {
    this.items = items;
    this.total = total;
    this.page = page;
    this.limit = limit;
    this.totalPages = Math.ceil(total / limit);
    this.hasNext = page < this.totalPages;
    this.hasPrev = page > 1;
  }
}

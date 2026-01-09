import { IsString, IsInt, IsOptional, Min, Max, MinLength, MaxLength } from 'class-validator';

/**
 * 创建猫咪 DTO
 */
export class CreateCatDto {
  @IsString({ message: '名称必须是字符串' })
  @MinLength(1, { message: '名称不能为空' })
  @MaxLength(50, { message: '名称最长50个字符' })
  name: string;

  @IsInt({ message: '年龄必须是整数' })
  @Min(0, { message: '年龄不能小于0' })
  @Max(30, { message: '年龄不能大于30' })
  age: number;

  @IsOptional()
  @IsString({ message: '品种必须是字符串' })
  breed?: string;

  @IsOptional()
  @IsString({ message: '颜色必须是字符串' })
  color?: string;
}

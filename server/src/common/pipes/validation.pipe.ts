import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  Type,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance, ClassConstructor } from 'class-transformer';
import { BusinessException } from '../exceptions/business.exception';
import { BUSINESS_CODE } from '../constants/http-status.constant';

/**
 * 全局验证管道
 * 自动验证所有使用 class-validator 装饰器的 DTO
 */
@Injectable()
export class ValidationPipe implements PipeTransform<unknown> {
  async transform(value: unknown, { metatype }: ArgumentMetadata): Promise<unknown> {
    // 如果没有类型或是基础类型，直接返回
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    // 转换为类实例
    const object = plainToInstance(
      metatype as ClassConstructor<object>,
      value as object,
    );

    // 验证
    const errors = await validate(object);

    if (errors.length > 0) {
      // 格式化错误消息
      const messages = errors.map((error) => {
        return Object.values(error.constraints || {}).join(', ');
      });

      throw new BusinessException(
        messages.join('; '),
        BUSINESS_CODE.VALIDATION_ERROR,
      );
    }

    return object;
  }

  /**
   * 判断是否需要验证
   */
  private toValidate(metatype: Type<unknown>): boolean {
    const types: Type<unknown>[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

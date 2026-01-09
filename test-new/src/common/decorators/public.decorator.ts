import { SetMetadata } from '@nestjs/common';

/**
 * 公开接口装饰器
 * 使用此装饰器的接口将跳过认证
 */
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { BusinessException } from '../exceptions/business.exception';

/**
 * 认证守卫
 * 验证用户是否已登录
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 检查是否为公开接口
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw BusinessException.unauthorized('未提供认证令牌');
    }

    // TODO: 验证token并解析用户信息
    // 这里暂时简单验证，后续可以集成 JWT
    try {
      // 模拟验证token
      // const payload = this.jwtService.verify(token);
      // request.user = payload;

      // 临时：将token作为用户信息存储
      (request as Request & { user: { token: string } }).user = { token };
      return true;
    } catch {
      throw BusinessException.unauthorized('认证令牌无效或已过期');
    }
  }

  /**
   * 从请求头中提取token
   */
  private extractTokenFromHeader(request: Request): string | undefined {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return undefined;
    }

    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}

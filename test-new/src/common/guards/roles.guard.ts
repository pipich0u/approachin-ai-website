import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { BusinessException } from '../exceptions/business.exception';

/**
 * 角色守卫
 * 验证用户是否具有所需角色
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 获取所需角色
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // 如果没有设置角色要求，直接通过
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = (request as Request & { user?: { roles?: string[] } }).user;

    if (!user) {
      throw BusinessException.unauthorized('请先登录');
    }

    // TODO: 从用户信息中获取角色
    // 这里暂时使用模拟数据
    const userRoles: string[] = user.roles || [];

    // 检查用户是否具有所需角色
    const hasRole = requiredRoles.some((role) => userRoles.includes(role));

    if (!hasRole) {
      throw BusinessException.forbidden('无权限访问此资源');
    }

    return true;
  }
}

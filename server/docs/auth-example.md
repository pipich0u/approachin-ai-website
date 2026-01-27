# 认证和授权使用示例

## 概述

项目已经内置了完整的认证和授权系统，但默认所有接口都是公开的。当你需要保护某些接口时，可以参考以下示例。

## 相关文件

- 认证守卫: [src/common/guards/auth.guard.ts](../src/common/guards/auth.guard.ts)
- 角色守卫: [src/common/guards/roles.guard.ts](../src/common/guards/roles.guard.ts)
- @Public() 装饰器: [src/common/decorators/public.decorator.ts](../src/common/decorators/public.decorator.ts)
- @Roles() 装饰器: [src/common/decorators/roles.decorator.ts](../src/common/decorators/roles.decorator.ts)

## 使用方式

### 方式1：控制器级别启用认证

所有接口默认需要认证，使用 `@Public()` 标记公开接口：

```typescript
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)  // 控制器级别启用守卫
export class UserController {

  // 公开接口 - 不需要认证
  @Get('list')
  @Public()
  findAll() {
    return [];
  }

  // 需要认证 - 任何已登录用户都可以访问
  @Get('profile')
  getProfile() {
    return { name: 'John' };
  }

  // 需要admin角色
  @Delete(':id')
  @Roles('admin')
  remove() {
    return { message: 'deleted' };
  }

  // 需要多个角色之一
  @Post()
  @Roles('admin', 'editor')
  create() {
    return { message: 'created' };
  }
}
```

### 方式2：接口级别启用认证

只对特定接口启用认证：

```typescript
import { Controller, Get, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('posts')
export class PostController {

  // 公开接口 - 不需要守卫
  @Get()
  findAll() {
    return [];
  }

  // 需要认证
  @Get('mine')
  @UseGuards(AuthGuard)
  myPosts() {
    return [];
  }

  // 需要admin角色
  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  remove() {
    return { message: 'deleted' };
  }
}
```

## 请求头格式

需要认证的接口必须在请求头中携带 token：

```bash
# 正确的格式
Authorization: Bearer <your-token>

# 示例
curl http://localhost:3210/api/users/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## 错误响应

### 未提供 token

```json
{
  "code": 2001,
  "message": "未提供认证令牌",
  "timestamp": 1234567890,
  "path": "/api/users/profile"
}
```

### token 无效或过期

```json
{
  "code": 2001,
  "message": "认证令牌无效或已过期",
  "timestamp": 1234567890,
  "path": "/api/users/profile"
}
```

### 权限不足

```json
{
  "code": 2004,
  "message": "无权限访问此资源",
  "timestamp": 1234567890,
  "path": "/api/users/1"
}
```

## 集成 JWT

当前守卫使用的是简单的 token 验证，实际项目中你需要集成 JWT：

### 1. 安装依赖

```bash
pnpm add @nestjs/jwt @nestjs/passport passport passport-jwt
pnpm add -D @types/passport-jwt
```

### 2. 更新 AuthGuard

修改 [src/common/guards/auth.guard.ts](../src/common/guards/auth.guard.ts)：

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { BusinessException } from '../exceptions/business.exception';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,  // 注入 JwtService
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw BusinessException.unauthorized('未提供认证令牌');
    }

    try {
      // 验证并解析 JWT
      const payload = this.jwtService.verify(token);

      // 将用户信息附加到请求对象
      request.user = payload;

      return true;
    } catch (error) {
      throw BusinessException.unauthorized('认证令牌无效或已过期');
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
```

### 3. 配置 JWT 模块

在 `app.module.ts` 中导入 JWT 模块：

```typescript
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '7d' },
    }),
    // ... 其他模块
  ],
})
export class AppModule {}
```

### 4. 创建登录接口

```typescript
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('login')
  @Public()
  async login(@Body() loginDto: LoginDto) {
    // 验证用户名密码（这里需要实现）
    const user = { id: 1, username: 'admin', roles: ['admin'] };

    // 生成 JWT
    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
      user,
    };
  }
}
```

## 在 Service 中获取当前用户

创建一个自定义装饰器来获取当前登录用户：

```typescript
// src/common/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
```

使用方式：

```typescript
@Get('profile')
getProfile(@CurrentUser() user: any) {
  return user;
}
```

## 完整示例

参考项目中的 `cat.controller.ts`，其中包含了所有使用方式的注释示例。

## 下一步

1. 集成数据库存储用户信息
2. 实现用户注册和登录
3. 添加密码加密（使用 bcrypt）
4. 实现刷新 token 机制
5. 添加用户角色管理

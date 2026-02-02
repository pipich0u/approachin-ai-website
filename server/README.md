# Approaching AI Backend

基于 NestJS 的企业级后端项目，已完成完整的工程化配置。

## 📦 项目特性

### 已实现的工程化功能

✅ **统一响应格式** - 所有接口返回格式一致
✅ **全局异常处理** - 统一错误处理和错误码
✅ **参数自动验证** - 基于 class-validator 的 DTO 验证
✅ **请求日志记录** - 完整的请求/响应日志
✅ **认证授权守卫** - JWT 认证和角色权限控制
✅ **响应拦截器** - 自动包装响应数据
✅ **超时控制** - 请求超时保护
✅ **环境配置管理** - 支持多环境配置
✅ **自定义日志服务** - 彩色日志输出

## 🏗️ 项目结构

```
test-new/
├── src/
│   ├── common/                    # 公共模块
│   │   ├── constants/             # 常量定义
│   │   ├── decorators/            # 装饰器
│   │   ├── dto/                   # 通用 DTO
│   │   ├── exceptions/            # 自定义异常
│   │   ├── filters/               # 异常过滤器
│   │   ├── guards/                # 守卫
│   │   ├── interceptors/          # 拦截器
│   │   ├── middleware/            # 中间件
│   │   └── pipes/                 # 管道
│   ├── config/                    # 配置文件
│   ├── modules/                   # 功能模块
│   │   └── logger/                # 日志模块
│   ├── cat/                       # 业务模块示例
│   ├── app.module.ts              # 根模块
│   └── main.ts                    # 入口文件
├── .env                           # 环境变量
└── package.json
```

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env` 并根据需要修改配置

### 3. 启动项目

```bash
# 开发模式
pnpm start:dev

# 生产模式
pnpm build
pnpm start:prod
```

项目将在 `http://localhost:3210` 启动，API 前缀为 `/v2`

## 📚 使用指南

### 统一响应格式

所有接口自动返回以下格式：

```json
{
  "code": 200,
  "message": "操作成功",
  "data": { ... },
  "timestamp": 1234567890
}
```

### 参数验证

使用 class-validator 装饰器：

```typescript
export class CreateCatDto {
  @IsString({ message: '名称必须是字符串' })
  @MinLength(1, { message: '名称不能为空' })
  name: string;

  @IsInt({ message: '年龄必须是整数' })
  @Min(0, { message: '年龄不能小于0' })
  age: number;
}
```

### 异常处理

```typescript
// 资源不存在
throw BusinessException.notFound('猫咪不存在');

// 参数错误
throw BusinessException.paramError('年龄必须大于0');

// 无权限
throw BusinessException.forbidden('无权访问');
```

### 认证和授权

**当前所有接口都是公开的，不需要认证**

项目已内置完整的认证授权系统，但默认不启用。如需启用，请参考：
- 示例代码：[src/cat/cat.controller.ts](src/cat/cat.controller.ts) 中的注释
- 详细文档：[docs/auth-example.md](docs/auth-example.md)

```typescript
// 在控制器级别启用认证
@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UserController {
  // 公开接口
  @Get()
  @Public()
  findAll() { ... }

  // 需要认证
  @Get('profile')
  getProfile() { ... }

  // 需要admin角色
  @Delete(':id')
  @Roles('admin')
  remove() { ... }
}
```

### 分页查询

```typescript
@Get()
findAll(@Query() pagination: PaginationDto) {
  // pagination.page - 页码（默认1）
  // pagination.limit - 每页数量（默认10）
  return this.service.findAll(pagination);
}
```


## 🔧 环境变量说明

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| NODE_ENV | 环境 | development |
| PORT | 端口 | 3210 |
| LOG_LEVEL | 日志级别 | error,warn,info,debug |
| CORS_ORIGINS | 允许的跨域源 | localhost:5174,... |
| REQUEST_TIMEOUT | 请求超时时间(ms) | 30000 |

## 📝 业务状态码

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 1001 | 参数错误 |
| 1002 | 验证失败 |
| 1003 | 资源不存在 |
| 2001 | 未认证 |
| 2004 | 无权限 |
| 5001 | 系统内部错误 |

## 🎯 下一步

- [ ] 集成数据库（TypeORM + MySQL）
- [ ] 实现 JWT 认证
- [ ] 添加 Swagger API 文档
- [ ] 添加单元测试
- [ ] 实现文件上传
- [ ] 添加缓存（Redis）

## 📄 License

UNLICENSED

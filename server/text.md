# NestJS 核心概念解析

## Module 模块解析

## 一、Module 定义

**职责：组织和管理应用模块**

将 Controller、Service、Entity 等组件封装在一起，实现模块化开发。

核心作用：组件封装、依赖声明、模块隔离。

## 二、基本结构

```typescript
@Module({
  imports: [TypeOrmModule.forFeature([User])], // 导入依赖
  controllers: [UserController], // 注册控制器
  providers: [UserService], // 注册服务
  exports: [UserService], // 导出供其他模块使用
})
export class UserModule {}
```

## 三、配置说明

| 配置项        | 说明                   |
| ------------- | ---------------------- |
| `imports`     | 导入其他模块           |
| `controllers` | 注册本模块控制器       |
| `providers`   | 注册本模块服务         |
| `exports`     | 导出服务供其他模块使用 |

## 四、模块类型

| 类型         | 说明                   | 示例                          |
| ------------ | ---------------------- | ----------------------------- |
| **根模块**   | 应用入口，导入所有模块 | `AppModule`                   |
| **功能模块** | 按业务功能划分         | `UserModule`、`InquiryModule` |
| **共享模块** | 提供复用服务           | `EmailModule`                 |
| **全局模块** | 自动导入所有模块       | `@Global()`                   |

## 五、组件关系

```
Module（容器）
├── Controller → 处理请求
├── Service → 业务逻辑
└── Entity → 数据模型
```

## 六、完整示例

```typescript
// 根模块
@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, InquiryModule],
})
export class AppModule {}

// 功能模块
@Module({
  imports: [TypeOrmModule.forFeature([Inquiry])],
  controllers: [InquiryController],
  providers: [InquiryService],
  exports: [InquiryService],
})
export class InquiryModule {}

// 共享模块
@Global()
@Module({ providers: [EmailService], exports: [EmailService] })
export class EmailModule {}
```

## 七、最佳实践

- **单一职责**：每个模块专注一个业务功能
- **模块解耦**：通过接口而非直接依赖
- **共享模块**：通用服务抽取为共享模块
- **全局模块**：常用服务使用 `@Global()` 声明




## 一、Controller 与 Service 的区别

### Controller（控制器）

**职责：处理 HTTP 请求和响应**

Controller 是客户端请求进入后端的第一站，负责接收请求、解析参数、调用业务逻辑、返回响应。

核心作用包括：路由管理，通过装饰器定义接口端点；参数提取，从请求中获取 URL 参数、查询参数、请求体数据；响应格式化，将处理结果以合适格式返回给客户端。

```typescript
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
```

### Service（服务）

**职责：处理业务逻辑和数据操作**

Service 是业务逻辑的核心，负责实现具体的业务规则、数据处理和数据库操作。

核心作用包括：业务逻辑实现，封装核心业务规则；数据持久化，执行 CRUD 操作；数据转换，处理数据格式转换；跨模块共享，提供可复用的业务功能。

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }
}
```

### 协作关系

```
请求 → Controller（接收请求）→ Service（处理业务）→ 数据库
              ↓
        返回响应
```

Controller 只关注请求接收和响应返回，Service 专注于业务逻辑实现，两者通过依赖注入协作。

## 二、Entity（实体）的作用

**职责：定义数据库表结构**

Entity 是一个数据模型类，描述数据库表的结构，将 TypeScript 类映射到数据库表。

核心作用包括：表结构映射，通过装饰器定义列和数据类型；数据类型约束，确保数据格式正确；关系定义，建立表与表之间的关联。

```typescript
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  age: number;

  @CreateDateColumn()
  createdAt: Date;
}
```

## 三、三者对比总结

| 概念           | 职责         | 关注点       | 装饰器        |
| -------------- | ------------ | ------------ | ------------- |
| **Controller** | 处理请求响应 | 如何响应请求 | @Controller() |
| **Service**    | 业务逻辑实现 | 如何完成业务 | @Injectable() |
| **Entity**     | 定义表结构   | 数据如何存储 | @Entity()     |

## 四、实际应用示例

以客户咨询申请为例：

1. **Entity** 定义存储结构

```typescript
@Entity("inquiries")
export class Inquiry {
  @PrimaryGeneratedColumn("uuid") id: string;
  @Column() customerName: string;
  @Column() customerPhone: string;
  @Column() productName: string;
  @Column({ default: "pending" }) status: string;
  @CreateDateColumn() createdAt: Date;
}
```

2. **Service** 处理业务逻辑

```typescript
@Injectable()
export class InquiryService {
  constructor(
    @InjectRepository(Inquiry)
    private readonly repo: Repository<Inquiry>,
  ) {}

  async create(data: any): Promise<Inquiry> {
    const inquiry = this.repo.create({ ...data, status: "pending" });
    const saved = await this.repo.save(inquiry);
    // 发送通知邮件
    await this.sendNotification(saved);
    return saved;
  }

  private async sendNotification(inquiry: Inquiry) {
    // 发送邮件或企业微信通知
  }
}
```

3. **Controller** 接收请求

```typescript
@Controller("api/inquiries")
export class InquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() dto: any, @Req() req: any) {
    const inquiry = await this.inquiryService.create(dto);
    return { success: true, data: inquiry };
  }
}
```

# TypeORM @Column() 装饰器配置选项完整列举

## 一、数据类型（type）选项

### 字符串类型

```typescript
@Column({ type: 'varchar', length: 255 })      // 短字符串
@Column({ type: 'text' })                       // 长文本
@Column({ type: 'char', length: 10 })           // 固定长度
@Column({ type: 'blob' })                       // 二进制数据
@Column({ type: 'json' })                       // JSON 数据
@Column({ type: 'jsonb' })                      // JSONB（仅 PG）
@Column({ type: 'simple-json' })                // 简单 JSON
```

### 数值类型

```typescript
@Column({ type: 'int' })          // 整数
@Column({ type: 'integer' })      // 整数
@Column({ type: 'int8' })         // 大整数（PG）
@Column({ type: 'smallint' })     // 小整数
@Column({ type: 'bigint' })       // 大整数（JS 用字符串）
@Column({ type: 'float' })        // 浮点数
@Column({ type: 'double' })       // 双精度
@Column({ type: 'real' })         // 单精度
@Column({ type: 'decimal', precision: 10, scale: 2 })  // 精确小数
```

### 日期时间类型

```typescript
@Column({ type: 'date' })              // 日期
@Column({ type: 'time' })              // 时间
@Column({ type: 'datetime' })          // 日期时间
@Column({ type: 'timestamp' })         // 时间戳
@Column({ type: 'timestamptz' })       // 带时区（PG）
@CreateDateColumn()                    // 自动创建时间
@UpdateDateColumn()                    // 自动更新时间
@DeleteDateColumn()                    // 软删除时间
```

### 布尔类型

```typescript
@Column({ type: 'boolean' })   // 布尔值
@Column({ type: 'bool' })      // 布尔值简写
```

### 枚举类型

```typescript
export enum Status { ACTIVE = 'active', INACTIVE = 'inactive' }
@Column({ type: 'enum', enum: Status })        // 枚举
@Column({ type: 'simple-enum', enum: ['a','b'] })  // 简单枚举
```

## 二、通用配置选项

### 基本配置

```typescript
@Column({ name: 'user_id' })        // 自定义列名
@Column({ length: 100 })            // 字符串长度
@Column({ charset: 'utf8mb4' })     // 字符集
@Column({ collation: 'utf8mb4_unicode_ci' })  // 排序规则
```

### 空值与默认值

```typescript
@Column({ nullable: true })                   // 允许为空
@Column({ nullable: false })                  // 不允许为空（默认）
@Column({ default: 'pending' })               // 默认值
@Column({ default: 0 })                       // 数值默认值
@Column({ default: false })                   // 布尔默认值
@Column({ default: () => 'CURRENT_TIMESTAMP' })  // SQL 默认值
```

### 约束

```typescript
@Column({ unique: true })                     // 唯一约束
@Column({ unique: 'custom_name' })            // 命名唯一约束
```

### 主键

```typescript
@PrimaryGeneratedColumn()             // 自增主键
@PrimaryGeneratedColumn('uuid')       // UUID 主键
@PrimaryGeneratedColumn('increment')  // 自增 ID
@PrimaryGeneratedColumn('identity')   // SQL Server
@PrimaryGeneratedColumn('rowid')      // CockroachDB
@PrimaryColumn()                      // 手动主键
```

### 精度与小数

```typescript
@Column({ type: 'decimal', precision: 10, scale: 2 })  // 精度+刻度
@Column({ type: 'timestamp', precision: 3 })           // 时间戳精度
```

### 注释

```typescript
@Column({ comment: '字段描述' })            // 列注释
@Entity({ comment: '表描述' })               // 表注释
```

### 生成方式

```typescript
@Column({ generated: 'increment' })  // 存储生成
@Column({ generated: 'uuid' })       // UUID 生成
@Column({ generated: 'computed' })   // 计算列
```

## 三、特定数据库选项

### MySQL 特有

```typescript
@Column({ type: 'varchar', length: 100 })
@Column({ type: 'char', length: 10 })
@Column({ type: 'text' })
@Column({ type: 'mediumtext' })      // 中文本
@Column({ type: 'longtext' })        // 长文本
@Column({ type: 'tinyint', width: 1 })  // 布尔
@Column({ type: 'int', unsigned: true })  // 无符号
@Entity({ engine: 'InnoDB' })        // 存储引擎
```

### PostgreSQL 特有

```typescript
@Column('simple-array')              // 数组存储
@Column('simple-json')               // JSON 存储
@Column('timestamptz')               // 时区时间戳
@Column('interval')                  // 时间间隔
@Column({ type: 'jsonb' })           // JSONB
@Column({ type: 'uuid' })            // UUID
```

### SQLite 特有

```typescript
// SQLite 类型映射为 TEXT、INTEGER、REAL、BLOB
@Column('int')
@Column('integer')
@Column('float')
@Column('text')
@Column('blob')
```

### SQL Server 特有

```typescript
@Column({ type: 'rowversion' })      // 行版本
@PrimaryGeneratedColumn('identity')  // 标识列
```

## 四、常用组合示例

### 用户字段

```typescript
// 唯一、必填
@Column({
  type: 'varchar',
  length: 50,
  unique: true,
  nullable: false,
  comment: '描述',
  charset: 'utf8mb4',
})
username: string;

// 自动时间戳
@CreateDateColumn({ type: 'datetime' }) createdAt: Date;
@UpdateDateColumn({ type: 'datetime' }) updatedAt: Date;
@DeleteDateColumn({ type: 'datetime' }) deletedAt: Date;
```

### 金额字段

```typescript
// 精确小数
@Column({
  type: 'decimal',
  precision: 12,
  scale: 2,
  default: 0,
})
amount: number;

// 正整数
@Column({ type: 'int', unsigned: true, default: 1 }) quantity: number;
```

### 状态字段

```typescript
export enum OrderStatus { PENDING='pending', PAID='paid', SHIPPED='shipped' }

@Column({
  type: 'enum',
  enum: OrderStatus,
  default: OrderStatus.PENDING,
})
status: OrderStatus;

@Column({ type: 'boolean', default: false }) isActive: boolean;
```

## 五、配置速查表

| 配置项      | 类型    | 说明       |
| ----------- | ------- | ---------- |
| `type`      | string  | 数据类型   |
| `name`      | string  | 列名       |
| `length`    | number  | 字符串长度 |
| `precision` | number  | 数字总位数 |
| `scale`     | number  | 小数位数   |
| `nullable`  | boolean | 是否可空   |
| `default`   | any     | 默认值     |
| `unique`    | boolean | 唯一约束   |
| `comment`   | string  | 注释       |
| `charset`   | string  | 字符集     |
| `collation` | string  | 排序规则   |
| `unsigned`  | boolean | 无符号     |
| `enum`      | any[]   | 枚举值     |
| `generated` | string  | 生成策略   |

## 六、完整示例

```typescript
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({
    name: "user_name",
    type: "varchar",
    length: 50,
    unique: true,
    nullable: false,
    comment: "用户名",
    charset: "utf8mb4",
  })
  username: string;

  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({ type: "boolean", default: true }) isActive: boolean;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt: Date;
}
```

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('cats')
export class Cat {
    @PrimaryGeneratedColumn('uuid')
    // 主键字段，uuid类型
    id: string;

    @Column()
    title: string;

    @Column({ type: 'text', length: 500, nullable: true })
    // length:字数限制
    // nullable:是否允许为空
    desc: string;

    @Column()
    link: string
    
    @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
    // 类型为 decimal 
    // precision: 总位数
    // scale: 小数点后位数
    price: number;

    
    @Column()
    mount: string
}

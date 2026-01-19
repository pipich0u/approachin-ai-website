import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('info')
export class Info {
    // increment 类型的主键字段自增数，适用于大部分业务场景 从小整数自动递增
    // uuid 类型的主键字段适用于全局唯一属性
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;
}

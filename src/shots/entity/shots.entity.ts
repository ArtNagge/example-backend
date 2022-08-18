import { ServicesEntity } from 'src/services/entity/services.entity';
import { TypesEntity } from 'src/types/entity/types.entity';
import { UsersEntity } from 'src/users/entity/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShotsStatusEnum } from '../types/enums/shots';

@Entity('shots')
export class ShotsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'varchar', length: 300 })
  shotUrl: string;

  @Column({ type: 'varchar', length: 300 })
  picture: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'integer', nullable: false, default: 0 })
  count: number;

  @Column({ type: 'integer', nullable: false, default: 0 })
  executions: number;

  @Column({
    type: 'enum',
    enum: ShotsStatusEnum,
    default: ShotsStatusEnum.WORKING,
  })
  status: ShotsStatusEnum;

  @ManyToOne(() => ServicesEntity, (service) => service.shots, {
    onDelete: 'CASCADE',
  })
  service: ServicesEntity;

  @ManyToOne(() => TypesEntity, (type) => type.shots, {
    onDelete: 'CASCADE',
  })
  type: TypesEntity;

  @ManyToOne(() => UsersEntity, (user) => user.shots, {
    onDelete: 'CASCADE',
  })
  user: UsersEntity;

  @ManyToMany(() => UsersEntity, (user) => user.performeds, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  performeds: UsersEntity[];
}
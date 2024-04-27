import {
  BaseEntity,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './';

@Entity()
export class ApiKey extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.apiKeys, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User;

  @Column({
    type: 'timestamp',
    nullable: true
  })
  lastUsed: Date;

  @BeforeUpdate()
  updateLastUsed() {
    if (this.updatedAt > this.createdAt) {
      this.lastUsed = this.updatedAt;
    }
  }

  @Column({
    type: 'text'
  })
  hashedKey: string;

  @Column({
    type: 'text'
  })
  lastFour: string;
}

import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinTable,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  Relation
} from 'typeorm';
import { Organization, Scan } from './index';

@Entity()
@Index(['name'], { unique: true })
export class OrganizationTag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  name: string;

  /**
   * Organizations that are labeled with this tag
   */
  @ManyToMany((type) => Organization, (organization) => organization.tags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinTable()
  organizations: Relation<Organization>[];

  /**
   * Scans that have this tag enabled, and will run against all tagged organizations
   */
  @ManyToMany((type) => Scan, (scan) => scan.tags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  scans: Relation<Scan>[];
}

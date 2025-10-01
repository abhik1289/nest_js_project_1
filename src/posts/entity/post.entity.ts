import { Tag } from 'src/tags/entity/tags.entity';
import { User } from 'src/users/entities/users.entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'varchar',
    length: 200,
  })
  title: string;
  @Column({
    type: 'varchar',
    length: 500,
  })
  description: string;
  @ManyToOne(() => User, (user) => user.posts)
  user: User;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Tag, (tag) => tag.posts)
  tags: Tag[];
}

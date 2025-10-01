import { Post } from 'src/posts/entity/post.entity';
import { UserMeta } from 'src/user-meta/entity/UserMeta';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  NONE = 'none',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 20,
  })
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserMeta)
  @JoinColumn()
  userMeta: UserMeta;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}

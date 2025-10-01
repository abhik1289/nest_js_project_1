import { Module } from '@nestjs/common';
import { Post } from './entity/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
  ],
})
export class PostsModule {}

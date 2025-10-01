import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entity/tags.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Tag])],
})
export class TagsModule {}

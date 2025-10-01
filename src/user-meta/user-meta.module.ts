import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMeta } from './entity/UserMeta';

@Module({
  imports: [TypeOrmModule.forFeature([UserMeta])],
})
export class UserMetaModule {}

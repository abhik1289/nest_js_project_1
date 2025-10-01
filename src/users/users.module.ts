import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entities';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
})
export class UsersModule {}

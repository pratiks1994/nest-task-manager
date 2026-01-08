import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersDataStore } from './users.data.store';

@Module({
  providers: [UsersService, UsersDataStore],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

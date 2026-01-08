import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDataStore } from './task.data.store';
import { UsersModule } from 'src/users/users.module';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  imports: [UsersModule],
  providers: [TasksService, TaskDataStore],
  exports: [],
})
export class TasksModule {}

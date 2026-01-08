import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskDataStore } from './task.data.store';
import { CreateTask, Task } from 'src/common/task.type';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TasksService {
  constructor(
    private readonly taskDataStore: TaskDataStore,
    private readonly usersService: UsersService,
  ) {}

  getTasks() {
    return this.taskDataStore.findAll();
  }

  getTaskById(id: number) {
    return this.taskDataStore.findOne(id);
  }

  createTask(task: CreateTask) {
    return this.taskDataStore.create(task);
  }

  updateTask(id: number, task: Partial<Task>) {
    return this.taskDataStore.update(id, task);
  }

  deleteTask(id: number) {
    return this.taskDataStore.remove(id);
  }

  assignUserToTask(taskId: number, userId: number) {
    const user = this.usersService.getUser(userId);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    const task = this.taskDataStore.findOne(taskId);
    if (!task) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    return this.taskDataStore.assignUser(taskId, userId);
  }

  getTasksByUser(userId: number) {
    return this.taskDataStore.findByUser(userId);
  }
}

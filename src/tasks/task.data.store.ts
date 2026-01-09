import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from 'src/common/task.type';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Injectable()
export class TaskDataStore {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
      userId: 1,
      completed: true,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2 description',
      userId: 2,
      completed: false,
    },
  ];
  nextId = 3;

  constructor() {}

  create(task: CreateTaskDto): Task {
    const newTask = {
      ...task,
      userId: task.userId || null,
      completed: task.completed || false,
      id: this.nextId++,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  findAll() {
    console.log(this.tasks);
    return this.tasks;
  }

  findOne(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    return task;
  }

  remove(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return id;
  }

  update(id: number, task: UpdateTaskDto): Task | null {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1)
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    this.tasks[index] = { ...this.tasks[index], ...task, id };
    return this.tasks[index];
  }

  assignUser(taskId: number, userId: number) {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks[index] = { ...this.tasks[index], userId };
  }

  findByUser(userId: number) {
    return this.tasks.filter((task) => task.userId === userId);
  }
}

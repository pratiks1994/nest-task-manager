import { Injectable } from '@nestjs/common';
import { UsersDataStore } from './users.data.store';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersDataStore: UsersDataStore) {}

  getUsers() {
    return this.usersDataStore.findAll();
  }

  getUser(id: number) {
    return this.usersDataStore.findById(id);
  }

  createUser(user: CreateUserDto) {
    return this.usersDataStore.create(user);
  }
}

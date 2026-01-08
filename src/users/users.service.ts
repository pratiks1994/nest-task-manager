import { Injectable } from '@nestjs/common';
import { UsersDataStore } from './users.data.store';
import { User } from 'src/common/user.type';

@Injectable()
export class UsersService {
  constructor(private readonly usersDataStore: UsersDataStore) {}

  getUsers() {
    return this.usersDataStore.findAll();
  }

  getUser(id: number) {
    return this.usersDataStore.findById(id);
  }

  createUser(user: Omit<User, 'id'>) {
    return this.usersDataStore.create(user);
  }
}

import { Injectable } from '@nestjs/common';
import { User } from 'src/common/user.type';

@Injectable()
export class UsersDataStore {
  private users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  private nextId = 3;

  create(user: Omit<User, 'id'>) {
    const newUser = { ...user, id: this.nextId++ };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}

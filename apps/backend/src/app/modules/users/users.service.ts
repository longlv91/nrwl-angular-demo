import { Injectable } from '@angular/core';
import { UserDTO } from '@nrwl-workspace/entities';
import { users } from '../../../assets/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly users: UserDTO[];

  constructor() {
    this.users = users;
  }

  async findOne(username: string): Promise<UserDTO | undefined> {
    return this.users.find(user => user.username === username);
  }
}

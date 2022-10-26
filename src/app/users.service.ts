import { Injectable } from '@angular/core';
import { User } from './data/users.data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: User[] = []

  constructor() { }

  createUser(user: User) {
    this._users.push(user)
  }

  deleteUser(user: User) {
    this._users = this._users.filter(u => u !== user)
  }

  get users() {
    return [...this._users]
  }
}

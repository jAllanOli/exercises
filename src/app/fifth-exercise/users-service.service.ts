import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

export type User = {
  name: string;
  isActive: boolean;
};

@Injectable()
export class UsersServiceService {
  users: User[] = [
    { name: 'Max', isActive: true },
    { name: 'Jerry', isActive: false },
    { name: 'Anna', isActive: true },
    { name: 'Manu', isActive: false },
    { name: 'Thom', isActive: true },
    { name: 'Ricky', isActive: false },
  ];

  constructor(private counterService: CounterService) {}

  toggleStatus(name: string) {
    this.getUser(name).isActive = !this.getUser(name).isActive;
    this.counterService.increaseCounter();
  }

  getUsersByStatus(status: boolean): User[] {
    return this.users.filter((user) => user.isActive === status);
  }

  private getUser(name: string): User {
    return this.users.filter((user) => user.name === name)[0];
  }
}

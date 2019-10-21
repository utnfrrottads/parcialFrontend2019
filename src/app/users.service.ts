import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = [
    {
      name: 'Andres',
      roles: ['admin', 'schedule', 'read']
    },
    {
      name: 'Jose',
      roles: [ 'schedule', 'read']
    },
    {
      name: 'Juan',
      roles: [ 'read']
    },
    {
      name: 'Juan',
      roles: [ 'write']
    }
  ];
  public readonly roles = ['admin', 'schedule', 'read', 'write'];
  constructor() { }
}

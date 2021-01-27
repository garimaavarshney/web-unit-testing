import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  users: Array<object> = [  // Add employee object
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      pokemon: 'Venusaur'
    },
    {
      id: '4',
      name: 'Adam',
      role: 'Designer',
      pokemon: 'Yoshi'
    }
  ];

  constructor() { }

  getUsers(): Array<{}> {
    return [
      {
        name: 'user1',
        surname: 'usersurname1'
      },
      {
        name: 'user2',
        surname: 'usersurname2'
      }
    ];
  }

  all(): Observable<Array<object>> {
    return of(this.users);
  }

  findOne(id: string): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.id === id;
    });
    return of(user);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '@my-app/users/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiPath = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiPath);
  }

  addUser(user: User): Observable<void> {
    return this.http.post<void>(this.apiPath, user);
  }
}

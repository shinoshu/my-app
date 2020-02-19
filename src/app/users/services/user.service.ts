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

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiPath}/${id}`);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiPath);
  }

  addUser(user: User): Observable<void> {
    return this.http.post<void>(this.apiPath, user);
  }

  updateUser(user: User): Observable<void> {
    return this.http.post<void>(`${this.apiPath}/${user.id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiPath}/${id}`);
  }
}

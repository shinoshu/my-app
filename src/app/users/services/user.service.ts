import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '@my-app/user/reducers/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiPath = 'users';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiPath);
  }
}

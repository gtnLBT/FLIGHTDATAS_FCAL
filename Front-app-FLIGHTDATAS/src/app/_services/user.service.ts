import { HttpClient } from '@angular/common/http';
import { DebugEventListener, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_URL = "http://localhost:9015/users_dataflight_api/users";
  
  constructor(private httpClient : HttpClient) { }

  getUsersList(): Observable <User[]>{
    return this.httpClient.get<User[]>(`${this.base_URL}`);
  }

  createUser(user:User): Observable<Object>{
    user.enabled = true;
    return this.httpClient.post(`${this.base_URL}`, user);
  }

  getUserByUser_id(user_id: number): Observable<User>{
    return this.httpClient.get<User>("http://localhost:9015/users_dataflight_api/users/"+user_id);
  }

  updateUser(user_id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.base_URL}/${user_id}`, user);
  }

  deleteUser(user_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.base_URL}/${user_id}`);
  }

}

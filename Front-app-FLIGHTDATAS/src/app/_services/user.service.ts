import { HttpClient } from '@angular/common/http';
import { DebugEventListener, Injectable } from '@angular/core';
import { find, Observable, map } from 'rxjs';
import { UserListComponent } from '../user-list/user-list.component';
import { AircraftType } from '../_models/aircraft-type';
import { Flight } from '../_models/flight';
import { Registration } from '../_models/registration';
import { Role } from '../_models/role';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User |undefined;

  private base_URL = "http://localhost:9015/users_dataflight_api/users";
  
  constructor(private httpClient : HttpClient) { }
  

  getUsersList(): Observable <User[]>{
    return this.httpClient.get<User[]>(`${this.base_URL}`);
  }


  createUser(user:User): Observable<Object>{
    user.enabled = true;
    return this.httpClient.post(`${this.base_URL}`, user);
  }

  /* AddCallsignToAircraftType(): Observable<Object>{
    return
  }
 */

  getUserByUser_id(user_id: number): Observable<User>{
    return this.httpClient.get<User>("http://localhost:9015/users_dataflight_api/users/"+user_id);
  }

  updateUser(user_id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.base_URL}/${user_id}`, user);
  }

  deleteUser(user_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.base_URL}/${user_id}`);
  }

  getUserFlightInfoSumUp(registeredId_FlightInMongoDB_flightStore:string): Observable<Flight>{
    return this.httpClient.get<Flight>("http://localhost:9015/users_dataflight_api/users/flight/"+registeredId_FlightInMongoDB_flightStore); 
  }

  getRegistrationACByregistration(registration:string): Observable <Registration>{
    return this.httpClient.get<Registration>("http://localhost:9015/users_dataflight_api/registration/"+registration);
  }

  getTypeRatingByTypeRatingOACI(aircrafttypeoaci:string):Observable <AircraftType>{
    return this.httpClient.get<AircraftType>("http://localhost:9015/users_dataflight_api/aircraftType/"+aircrafttypeoaci);
  }

  getTypesRatings(): Observable<AircraftType[]>{
    return this.httpClient.get<AircraftType[]>("http://localhost:9015/users_dataflight_api/aircraftType/");
  }
}

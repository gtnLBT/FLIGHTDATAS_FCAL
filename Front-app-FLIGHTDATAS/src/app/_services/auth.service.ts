import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { AircraftType } from '../_models/aircraft-type';
import { Role } from '../_models/role';
import { User } from '../_models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  public loggedUser: User | undefined;
  public loggedUsername: string | undefined;
  public isloggedIn: Boolean = false;
  public roles: Role[] | undefined;
  public role: Role | undefined;

  
  

  constructor(private userService: UserService, private router: Router) { }

  users: User[]= this.getUsers();
  aircraftTypeRatings: AircraftType [] = this.getTypeRatings();

  private getUsers(){
    this.userService.getUsersList().subscribe(data =>{
      console.log(this.users)
      this.users = data;
      
    });
    return this.users;
  }

  private getTypeRatings(){
    this.userService.getTypesRatings().subscribe(data =>{
      this.aircraftTypeRatings = data
    });
    return this.aircraftTypeRatings;
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser;
        this.loggedUsername = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUsername!);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });

    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles) //this.roles== undefiened
      return false;
    var roleAdminToFind = JSON.stringify(this.roles);
    return (roleAdminToFind.indexOf("ADMIN") > -1);
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUsername = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }

  getAllTypeRatings(){
    this.getTypeRatings();
  }

  

}
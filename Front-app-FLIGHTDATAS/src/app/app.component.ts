import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { User } from './_models/user';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FLIGHTDATAS-Analysor';

  user_id!:number;
  user: User|undefined;

  
  constructor(public authService: AuthService, public userService: UserService, private router:Router){}

  onLogout(){
    this.authService.logout();
  }
  
}

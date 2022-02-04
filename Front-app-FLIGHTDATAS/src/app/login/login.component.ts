import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User = new User();
  erreur =0;

  constructor(private authService: AuthService,
    public router: Router) { }

 
  ngOnInit(): void {
    this.launchOneReload();
  }

  private launchOneReload(){
  (() => {
    if (window.localStorage) {
      if(!localStorage.getItem('reload')) {
        localStorage['reload'] = true;
        window.location.reload();
      } else {
        localStorage.removeItem('reload');
      }
    }
  })();
  }

  onLoggedin() {

    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    console.log("valid user " + isValidUser);
    if (isValidUser) {
      console.log("isadmin " + this.authService.isAdmin());
      this.router.navigate(['/']);
    }
    else
      //Swal.fire('Non connecté','Login ou mot de passe incorrecte!','error');
      this.erreur = 1;
  }

}

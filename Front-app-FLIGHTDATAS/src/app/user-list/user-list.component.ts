import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Role } from '../_models/role';
import { AuthService } from '../_services/auth.service';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[]|undefined;
  roles: Role[]|undefined
  

  constructor(private userService: UserService, private router: Router,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data =>{
      this.users = data;
    });
  }

  

  updateUser(user_id:number){
    this.router.navigate(['update-user', user_id]);
  }

  deleteUser(user_id:number){
    var res = confirm("êtes-vous sûr de vouloir supprimer cet utilisateur ?");
    if(res){
    this.userService.deleteUser(user_id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }
  }
  
  userDetails(user_id: number){
    this.router.navigate(['user-details', user_id]); 
  }


}

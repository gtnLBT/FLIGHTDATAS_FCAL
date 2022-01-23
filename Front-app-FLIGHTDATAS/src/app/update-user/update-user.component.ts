import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  
  user_id!: number;
  user: User = new User();

  constructor(private userService: UserService, 
    private route: ActivatedRoute, 
    private router: Router) { }
/* 
  ngOnInit(): void {
    this.user_id = this.route.snapshot.params['user_id'];
    this.userService.getUserByUser_id(this.user_id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }
   */

  ngOnInit(): void {
    this.user_id = this.route.snapshot.params['user_id'];
    this.userService.getUserByUser_id(this.user_id).subscribe({
      next: data => this.user = data,
      error: error => console.log(error), 
    })
  }

  onSubmit(){
    this.userService.updateUser(this.user_id, this.user).subscribe( data =>{
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

}

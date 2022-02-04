import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  user_id!: number;
  user: User|undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.user_id = this.route.snapshot.params['user_id'];

    this.user = new User();
    this.userService.getUserByUser_id(this.user_id).subscribe( data => {
      this.user = data;
    })
  }

}

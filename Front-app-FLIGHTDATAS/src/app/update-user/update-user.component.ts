import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { Role } from '../_models/role';
import { UserService } from '../_services/user.service';
import { of } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AircraftType } from '../_models/aircraft-type';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  
  user_id!: number;
  user: User = new User();
  role: Role|undefined;
  UserRoles: Role[]|undefined;
  TRList_loggedUser: Array<AircraftType>|undefined;

  constructor(private userService: UserService, 
    private route: ActivatedRoute, 
    private router: Router,
    public authService:AuthService) { }
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
      this.goToUserOperations();
      //this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  goToUserOperations(){
    this.router.navigate(['/user-operations']);
  }

  AddTR(){
    var aircraftType_ICAO = prompt("code OACI de votre qualification de type :")
    var aircraftType_Commercial = prompt("nom commercial de l'avion :")
    var validite_TR = prompt("date de validité de votre Qualification de type :")
    if(aircraftType_ICAO && aircraftType_Commercial && validite_TR){
      this.TRList_loggedUser = this.authService.loggedUser?.aircraftTypes;
      var TR_LoggedUser = new AircraftType();
      TR_LoggedUser.aircrafttypeicao = aircraftType_ICAO;
      TR_LoggedUser.aircraftType_commercialName = aircraftType_Commercial;
      // à faire : TR_LoggedUser.TR_validity..
      this.TRList_loggedUser?.push(TR_LoggedUser);

      this.userService.updateUser(this.authService.loggedUser?.user_id!, this.authService.loggedUser!).subscribe(data =>{
        console.log(data);
      })

      alert ("votre qualification de type a bien été ajoutée")

    }
  }

}

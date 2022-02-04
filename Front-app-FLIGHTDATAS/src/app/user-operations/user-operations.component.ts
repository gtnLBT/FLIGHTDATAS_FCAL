import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flightdatas } from '../_models/flightdatas';
import { FlightService } from '../_services/flight.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { Flight } from '../_models/flight';
import { Observable, zip, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AircraftType } from '../_models/aircraft-type';

@Component({
  selector: 'app-user-operations',
  templateUrl: './user-operations.component.html',
  styleUrls: ['./user-operations.component.css']
})
export class UserOperationsComponent implements OnInit {



  public callsign: string = "";
  public firstSeen: number = 0;
  public lastSeen: number = 0;
  public estDepartureAirport: string = "";
  public estArrivalAirport: string = "";

  x: User | undefined;
  user_a: User | undefined;
  user_id!: number;
  _id: string | undefined;
  id: string | undefined

  user: User | undefined;
  FR_loggedUser: Array<Flight> | undefined;
  flightdatas: Flightdatas | undefined;
  Oneflightdatas: Flightdatas | undefined;
  dataTotest: Flightdatas | undefined;


  flightBy_id: Flightdatas | undefined;
  listOfResearchResults: Flightdatas[] | undefined;
  userFlightdatasList: Flightdatas[] | undefined;
  userFlightSum_up: Flight | undefined;
  detailsForOneFlight: Flightdatas | undefined;
  registeredId: string | undefined;
  flightdatasTable: Flightdatas[] | undefined;
  tableToDisplay: Flightdatas[] | undefined;
  aircraftTypeTable: Array<AircraftType>|undefined;
  flightRecordsTable:Array<Flight>|undefined;


  constructor(private flightService: FlightService, public authService: AuthService, private userService: UserService, private router: Router) { }



  ngOnInit(): void {
    this.displayAlltheFlightOftheLoggedUser()
  }


  flightResearch() {
    this.flightService.getFlightsOnResearchRequest(
      this.callsign,
      this.firstSeen,
      this.lastSeen,
      this.estDepartureAirport,
      this.estArrivalAirport
    ).subscribe(res => {
      this.listOfResearchResults = res
    });
  };

  deleteFlight(_id: string) {
    this.flightService.deleteFlightBy_id(_id);
  }

  updateLoggedUser(user_id: number) {
    this.router.navigate(['update-user', user_id]);
  }

  confirmFlightToAdd(_id: string, icao24: string, firstSeen: number, estDepartureAirport: string, lastSeen: number, estArrivalAirport: string, callsign: string) {
    //verifier dans la liste registration que l'avion existe
    this.flightRecordsTable = this.authService.loggedUser?.flightRecords;
    var a = this.flightRecordsTable?.find(data => data.callsign == callsign)
    if (!a) {
      //on vérifie le type rating de l'utilisateur, si pas de TR on sort.
      var TR_Oaci = prompt("merci de renseigner la qualification de type - standard OACI- nécessaire au pilotage de cet avion:")
      this.aircraftTypeTable = this.authService.loggedUser?.aircraftTypes;
      var b = this.aircraftTypeTable?.find(data => data.aircrafttypeicao == TR_Oaci)
      if (b == undefined) {
        alert("Vous n'avez pas la qualification de type pour piloter cet avion");
        return;
      }
    }
    var nbPNT = prompt("nombre de PNT pour ce vol ?")
    if (nbPNT) {
      this.FR_loggedUser = this.authService.loggedUser?.flightRecords;
      var flight_LU = new Flight();
      flight_LU.registeredId = _id;
      flight_LU.numberOfCrew = parseInt(nbPNT);
      flight_LU.icao24 = icao24;
      flight_LU.flightTime = lastSeen - firstSeen;
      flight_LU.firstSeen = firstSeen;
      flight_LU.estDepartureAirport = estDepartureAirport;
      flight_LU.lastSeen = lastSeen;
      flight_LU.estArrivalAirport = estArrivalAirport;
      flight_LU.callsign = callsign;
      this.FR_loggedUser?.push(flight_LU);

      console.log(flight_LU);

      this.userService.updateUser(this.authService.loggedUser?.user_id!, this.authService.loggedUser!).subscribe(data => {
        console.log(data);
      })

      this.displayAlltheFlightOftheLoggedUser();
      alert("votre vol à bien été enregistré")

    }

  }

  displayAlltheFlightOftheLoggedUser() {
    this.FR_loggedUser = this.authService.loggedUser?.flightRecords;
  }








}
import { Component, OnInit } from '@angular/core';
import { Flightdatas } from '../_models/flightdatas';
import { FlightService } from '../_services/flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flightDatas : Flightdatas[]|undefined;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.getLastTenFlights();
  }

  private getLastTenFlights(){
    this.flightService.getTenLastFlights().subscribe(data =>{
      
      this.flightDatas = data;
      
      

      console.log(data);
    });
  }

}

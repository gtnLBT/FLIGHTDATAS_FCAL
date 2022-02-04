import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../_models/flight';
import { Flightdatas } from '../_models/flightdatas';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private base_URL = "http://localhost:1984/flights"

  constructor(private httpClient : HttpClient) { }

  getTenLastFlights(): Observable<Flightdatas[]>{
    var additional_URL = "last_ten_flights";
    return this.httpClient.get<Flightdatas[]>(`${this.base_URL}/${additional_URL}`);
  }

  getFlightBy_id(_id:string): Observable<Flightdatas>{
    return this.httpClient.get<Flightdatas>("http://localhost:1984/flight/id="+_id);
  }

  deleteFlightBy_id(_id:string): Observable<Flightdatas>{
    return this.httpClient.delete<Flightdatas>("http://localhost:1984/flight/id="+_id);
  }

  getFlightsOnResearchRequest(callsign:string,firstSeen:number,lastSeen:number,
    estDepartureAirport:string,estArrivalAirport:string): Observable<Flightdatas[]>{
      if(callsign){
        callsign;
      } else {
        callsign='*';
      };
      if(firstSeen || firstSeen != 0){
        var firstSeenData = firstSeen.toString();
      }else{
        firstSeenData = '*';
      };
      if(lastSeen || lastSeen != 0){
        var lastSeenData = lastSeen.toString();
      }else {
        lastSeenData = '*';
      };
      if(estDepartureAirport || estDepartureAirport != ""){
        estDepartureAirport;
      } else {
        estDepartureAirport='*';
      };
      if(estArrivalAirport || estArrivalAirport != "" ){
        estArrivalAirport;
      } else {
        estArrivalAirport='*';
      };

      let url = `${this.base_URL}/${callsign}/${firstSeenData}/${lastSeenData}/${estDepartureAirport}/${estArrivalAirport}`;
      console.log(url);
      return this.httpClient.get<Flightdatas[]>(url);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Flightdatas } from '../_models/flightdatas';

@Pipe({
  name: 'convertsecondestomillis'
})
export class ConvertsecondestomillisPipe implements PipeTransform {

  transform(value:number): number {
    
    return value*1000;
  }

   

}

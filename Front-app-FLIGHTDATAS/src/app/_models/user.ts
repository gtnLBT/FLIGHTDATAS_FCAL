import { Role } from "./role";
import { AircraftType } from "./aircraft-type";
import { Flight } from "./flight";


export class User {
    user_id: number|undefined;
    firstName: string|undefined;
    lastName: string|undefined;
    username: string|undefined;
    pilotLicenceNumber: string|undefined;
    companyName: string|undefined;
    homeBase: string|undefined;
    email: string|undefined;
    password: string|undefined;
    address: string|undefined;
    city: string|undefined;
    zip: string|undefined;
    country: string|undefined;
    enabled: boolean|undefined;
    roles: Array<Role>|undefined;
    aircraftTypes: Array<AircraftType>|undefined;
    flightRecords: Array<Flight>|undefined;

    
}

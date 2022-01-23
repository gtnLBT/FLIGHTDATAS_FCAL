import { Role } from "./role";
import { AircraftType } from "./aircraft-type";
import { Flight } from "./flight";

export class User {
    user_id: number|undefined;
    firstName: String|undefined;
    lastName: String|undefined;
    username: String|undefined;
    pilotLicenceNumber: String|undefined;
    companyName: String|undefined;
    homeBase: String|undefined;
    email: String|undefined;
    password: String|undefined;
    address: String|undefined;
    city: String|undefined;
    zip: String|undefined;
    country: String|undefined;
    enabled: Boolean|undefined;
    roles: Array<Role>|undefined;
    aircraftTypes: Array<AircraftType>|undefined;
    flightRecords: Array<Flight>|undefined;
}

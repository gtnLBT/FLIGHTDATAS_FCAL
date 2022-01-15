import express from 'express';
import { getAllFlights, getFlight, getCriteriasFromFlights} from '../controllers/flightController.js';


const router = express.Router();

// all routes in here are starting with /users
router.get('/:id', getFlight);

router.get('/', getAllFlights);

router.get('/criteria/:callsign/:firstSeen/:lastSeen/:estDepartureAirport/:estArrivalAirport', getCriteriasFromFlights);



export default router;
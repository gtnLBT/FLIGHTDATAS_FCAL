import express from 'express';
import bodyParser from 'body-parser';
import {} from "dotenv/config.js";
import {} from './models/db.js';


import flightRoutes from './routes/flightRoutes.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/flights', flightRoutes)



app.listen(PORT, ()=> console.log('Server running on port: http://localhost:${PORT}'));

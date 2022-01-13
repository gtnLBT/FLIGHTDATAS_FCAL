import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {} from "dotenv/config.js";


import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true},() => {
    console.log('connected to Database');
});

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req,res) =>res.send("Hello from HOMEPAGE"));

app.listen(PORT, ()=> console.log('Server running on port: http://localhost:${PORT}'));

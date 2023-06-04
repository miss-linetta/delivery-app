require('dotenv').config({ path: './.env' });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import foodRoutes from './routes/food';
import ordersRoutes from './routes/orders';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/food', foodRoutes);
app.use('/orders', ordersRoutes);

const CONNECTION_URL:string = process.env.CONNECTION_URL as string;
const PORT = process.env.PORT || 3000;

function start() {
    try {
      mongoose.connect(CONNECTION_URL);
  
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
      console.log(error);
    }
  }
  
start();
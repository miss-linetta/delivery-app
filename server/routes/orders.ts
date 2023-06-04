import express from 'express';

import { createOrder } from '../controllers/orders';

const ordersRoutes = express.Router();

ordersRoutes.post('/orders', createOrder);

export default ordersRoutes;
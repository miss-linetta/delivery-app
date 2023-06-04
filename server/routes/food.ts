import express from 'express';

import { getFood } from '../controllers/food';

const foodRoutes = express.Router();

foodRoutes.get('/', getFood);

export default foodRoutes;
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './reducers/order.reducer';
import cartReducer from './reducers/cart.reducer';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

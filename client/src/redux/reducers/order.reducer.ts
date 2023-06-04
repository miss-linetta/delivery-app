import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderAPI } from '@/lib/api/order/OrderAPI';

export interface OrderProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  items: Array<string>;
}

interface OrderItem extends OrderProps {}

interface OrderState {
  order: OrderItem[];
}

const initialState: OrderState = {
  order: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    postOrderSuccess: (state, action: PayloadAction<OrderItem>) => {
      state.order.push(action.payload);
    },
    postOrderFailure: (state, action: PayloadAction<string>) => {

    },
  },
});

export const { postOrderSuccess, postOrderFailure } = orderSlice.actions;

export const postOrder = (orderID: string, postData: OrderProps) => async (dispatch: any) => {
  try {
    const { data } = await OrderAPI.createOrder(orderID, postData);
    dispatch(postOrderSuccess(data));
  } catch (error: any) {
    dispatch(postOrderFailure(error.message));
  }
};

export default orderSlice.reducer;

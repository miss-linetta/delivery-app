import { createSlice } from '@reduxjs/toolkit';

export interface FoodCardProps {
  id: string;
  title: string;
  img: string;
  price: number;
}

interface CartItem extends FoodCardProps {}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      console.log(newItem);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

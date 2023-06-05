'use client';

import { Paper, TextField, Button, Box, Typography } from '@mui/material';
import * as styles from './Form.styles';
import { useQuery } from 'react-query';
import { OrderAPI } from '@/lib/api/order/OrderAPI';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateOrderID } from '@/components/utils/getOrderId';
import { getTotal } from '@/components/utils/getTotal';

export interface Item {
  id: string;
  img: string;
  title: string;
  price: number;
}

interface FormProps {
  cartItems: Array<Item>;
}

const Form: React.FC<FormProps> = ({ cartItems }) => {
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    items: [] as string[],
  });

  const getTotal = (cartItems: Array<Item>) => {
    const total = cartItems.reduce(
      (accumulator: number, currentValue: Item) =>
        accumulator + currentValue.price,
      0
    );

    return total;
  };

  const totalPrice = getTotal(cartItems);

  let itemsIdList: string[] = [];

  const getItemsIdList = (cartItems: Array<Item>) => {
    cartItems.forEach((item) => {
      itemsIdList.push(item.id);
    });
  };

  // const post = () => async () => {
  //   try {
  //     const { data } = await OrderAPI.createOrder(orderID, postData);
  //     console.log(data);
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };

  getItemsIdList(cartItems);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setPostData({ ...postData, items: itemsIdList });

    const orderID = generateOrderID();

    // dispatch(createOrder(orderID, postData));
  };

  return (
    <Paper sx={styles.container}>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setPostData({ ...postData, phone: e.target.value })}
        />
        <TextField
          id="address"
          label="Address"
          variant="outlined"
          fullWidth
          required
          onChange={(e) =>
            setPostData({ ...postData, address: e.target.value })
          }
        />
        <Box sx={styles.total}>
          <Typography variant="body2">Total:</Typography>
          <Typography variant="body2">${totalPrice}</Typography>
        </Box>
        <Button type="submit" color="inherit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

'use client';
import React from 'react';
import Form from './components/Form';
import { Grid } from '@mui/material';
import FoodList from './components/FoodList/FoodList';
import * as styles from './CartPage.styles';

const CartPage = () => {
  let cartItems = [];

  if (typeof localStorage !== 'undefined') {
    cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  return (
    <Grid container spacing={4} sx={styles.container}>
      <Grid item lg={4} md={6} sm={12}>
        <Form cartItems={cartItems} />
      </Grid>
      <Grid item lg={8} md={6} sm={12}>
        <FoodList cartItems={cartItems} />
      </Grid>
    </Grid>
  );
};

export default CartPage;

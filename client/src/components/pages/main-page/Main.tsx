import React from 'react';
import { useQuery } from 'react-query';
import FoodCard from './components/FoodCard';
import ShopList from './components/ShopItem';
import { Grid, Paper } from '@mui/material';
import { FoodAPI } from '@/lib/api/food/FoodAPI';
import * as styles from './Main.styles';
import { shopsList } from './utils/shopsList';
import Loading from '@/components/common/no-data/Loading';
import Error from '@/components/common/no-data/Error';

const Main = () => {
  const { isLoading, isError, data } = useQuery(
    'foods',
    () => FoodAPI.fetchFood(),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const shops = shopsList(data);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item lg={3} md={4} sm={5} xs={12}>
        <Paper sx={styles.shopsList}>
          {shops.map((item: any, idx) => (
            <ShopList key={idx} shop={item} />
          ))}
        </Paper>
      </Grid>
      <Grid item lg={9} md={8} sm={7} xs={12} sx={styles.foodList}>
        {data?.map((item: any, idx: any) => (
          <FoodCard
            key={idx}
            img={item.image}
            title={item.title}
            id={item._id}
            price={item.price}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Main;

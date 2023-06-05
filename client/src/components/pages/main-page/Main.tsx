import { SetStateAction, useState } from 'react';
import { useQuery } from 'react-query';
import FoodCard from './components/FoodCard';
import { Grid, Paper, Button } from '@mui/material';
import { FoodAPI } from '@/lib/api/food/FoodAPI';
import * as styles from './Main.styles';
import { shopsList } from '../../utils/shopsList';
import Loading from '@/components/common/no-data/Loading';
import Error from '@/components/common/no-data/Error';
import { FetchAllDTO } from '@/lib/api/food/dto/FetchAllDTO';

const Main = () => {
  const [selectedShop, setSelectedShop] = useState<string | null>(null);

  const { isLoading, isError, data } = useQuery(
    'foods',
    () => FoodAPI.fetchFood(),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const shops: string[] = Array.isArray(data) ? shopsList(data) : [];

  const handleSelect = (e: any) => {
    setSelectedShop(e.target.value);
  };

  let filteredData = data;

  if (selectedShop !== 'All') {
    filteredData = selectedShop
      ? data?.filter((item: FetchAllDTO) => item.shop === selectedShop)
      : data;
  }

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item lg={3} md={4} sm={5} xs={12}>
        <Paper sx={styles.shopsList}>
          <Button
            onClick={handleSelect}
            variant="outlined"
            value="All"
            key="All"
            color="inherit"
          >
            All
          </Button>
          {shops.map((item: string) => (
            <Button
              onClick={handleSelect}
              variant="outlined"
              value={item}
              key={item}
              color="inherit"
            >
              {item}
            </Button>
          ))}
        </Paper>
      </Grid>
      <Grid item lg={9} md={8} sm={7} xs={12} sx={styles.foodList}>
        {filteredData?.map((item: any, idx: any) => (
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

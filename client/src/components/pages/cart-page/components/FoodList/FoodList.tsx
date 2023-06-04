import FoodCard from '@/components/pages/main-page/components/FoodCard/FoodCard';
import { Box } from '@mui/material';
import * as styles from './FoodList.styles';

interface Item {
  id: string;
  img: string;
  title: string;
  price: number;
}

interface FoodListProps {
  cartItems: Array<Item>;
}

const FoodList: React.FC<FoodListProps> = ({ cartItems }) => {
  return (
    <Box sx={styles.container}>
      {cartItems.map((item) => (
        <FoodCard
          key={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          id={item.id}
        />
      ))}
    </Box>
  );
};

export default FoodList;

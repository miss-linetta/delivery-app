import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import * as styles from './FoodCard.styles';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { addToCart, removeFromCart } from '@/redux/reducers/cart.reducer';

export interface FoodCardProps {
  id: string;
  title: string;
  img: string;
  price: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ id, title, img, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const isInCart = cartItems.some((item: any) => item.id === id);
  const cartPage = false;

  const handleCartUpdate = () => {
    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      const newItem = {
        id,
        title,
        img,
        price,
      };
      dispatch(addToCart(newItem));
    }
  };

  return (
    <Card key={id} sx={styles.container}>
      <CardMedia sx={styles.media} component="img" image={img} title={title} />
      <CardContent sx={styles.content}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          ${price}
        </Typography>
      </CardContent>
      {!cartPage ? (
        <CardActions sx={styles.action}>
          {isInCart ? (
            <Button
              variant="outlined"
              size="small"
              color="error"
              type="button"
              endIcon={<RemoveShoppingCartOutlinedIcon />}
              onClick={handleCartUpdate}
            >
              Delete from cart
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="small"
              color="success"
              type="button"
              endIcon={<AddShoppingCartOutlinedIcon />}
              onClick={handleCartUpdate}
            >
              Add to cart
            </Button>
          )}
        </CardActions>
      ) : (
        ''
      )}
    </Card>
  );
};

export default FoodCard;

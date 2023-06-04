import { Box, Link, IconButton, Typography } from '@mui/material';
import * as styles from './Header.styles';
import image from '../../assets/food-express.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  return (
    <Box sx={styles.container}>
      <Link underline="none" color="inherit" href="/">
        <Typography variant="h4">food express</Typography>
      </Link>
      <IconButton color="inherit" href="/cart">
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default Header;

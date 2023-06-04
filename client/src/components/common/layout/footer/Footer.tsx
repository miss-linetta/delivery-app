import { Box } from '@mui/material';
import * as styles from './Footer.styles';

const Footer = () => {
  const date = new Date();
  return (
    <Box sx={styles.container}>
      Copyright © {date.getFullYear()} food express.
    </Box>
  );
};

export default Footer;

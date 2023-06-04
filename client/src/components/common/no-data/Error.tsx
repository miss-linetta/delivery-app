import { Box, Typography } from '@mui/material';
import * as styles from './NoData.styles';

const Error = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">Something went wrong...</Typography>
    </Box>
  );
};

export default Error;

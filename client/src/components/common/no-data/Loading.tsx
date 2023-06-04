import { CircularProgress, Box } from '@mui/material';
import * as styles from './NoData.styles';

const Loading = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loading;

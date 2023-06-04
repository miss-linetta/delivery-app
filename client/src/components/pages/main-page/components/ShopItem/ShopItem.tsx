import React from 'react';
import { Box, Button } from '@mui/material';

export interface ShopItemProps {
  shop: String;
}

const ShopItem: React.FC<ShopItemProps> = ({ shop }) => {
  return (
    <>
      <Button variant="outlined" color="inherit">
        {shop}
      </Button>
    </>
  );
};

export default ShopItem;

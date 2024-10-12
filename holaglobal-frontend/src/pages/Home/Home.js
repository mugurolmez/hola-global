import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { mainAppStyles } from '../../appStyles';
import { mainHomeTextItems } from './HomeItem';
import CustomerForm from '../../forms/CustomerForm/CustomerForm';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();
  const items = mainHomeTextItems(t);

  return (
    <Box sx={mainAppStyles.pageBox}>
      <Box sx={mainAppStyles.pageFormBox}>
        <CustomerForm />  
      </Box>

      <Box sx={mainAppStyles.pageTextBox}>
        {items.map((item) => (
          <Typography key={item.id} variant={item.variant}>
            {item.text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Home;

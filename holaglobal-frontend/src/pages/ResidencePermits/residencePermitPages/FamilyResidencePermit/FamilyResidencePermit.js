import {  Box, Typography } from '@mui/material';
import React from 'react';
import CustomerForm from '../../../../forms/CustomerForm/CustomerForm'; // Yol düzeltildi
import { mainAppStyles } from '../../../../appStyles'; // Yol düzeltildi
import { mainFamilyResidencePermitItems } from './FamilyResidencePermitItems';
import { useTranslation } from 'react-i18next';


const FamilyResidencePermit = () => {
  const { t } = useTranslation();
  const items = mainFamilyResidencePermitItems(t);


  return (
    <Box
   sx={mainAppStyles.pageBox}
  >
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

export default FamilyResidencePermit;

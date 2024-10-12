import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomerForm from '../../../../forms/CustomerForm/CustomerForm'
import { mainAppStyles } from '../../../../appStyles'
import { mainTouristResidencePermitItems } from './TouristResidencePermitItems'
import { useTranslation } from 'react-i18next';

const TouristResidencePermit = () => {
  const { t } = useTranslation();
  const items = mainTouristResidencePermitItems(t);
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
  )
}

export default TouristResidencePermit
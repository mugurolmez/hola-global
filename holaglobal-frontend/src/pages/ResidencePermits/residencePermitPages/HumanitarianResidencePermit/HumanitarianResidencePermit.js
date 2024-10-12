import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomerForm from '../../../../forms/CustomerForm/CustomerForm'
import { mainAppStyles } from '../../../../appStyles'
import { mainHumanitarianResidencePermitItems } from './HumanitarianResidencePermitItems'
import { useTranslation } from 'react-i18next';
const HumanitarianResidencePermit = () => {
  const { t } = useTranslation();
  const items = mainHumanitarianResidencePermitItems(t);
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

export default HumanitarianResidencePermit